# Site Architecture

How this site is structured, built, and deployed. Use this as the onboarding doc for future edits.

---

## 1. Stack

| Layer | Choice |
|---|---|
| Static site generator | [Jekyll](https://jekyllrb.com/) |
| Theme base | [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) → forked as [academicpages](https://academicpages.github.io/) |
| Hosting (prod) | GitHub Pages (classic, built server-side) |
| Local dev | Rootless Podman container running `jekyll/jekyll:4.2.2` |
| Domain | `kartheekmedathati.github.io` (live), `kartheek.info` (planned, DNS not yet pointed) |

No GitHub Actions, no custom build server — GitHub Pages' classic builder runs `jekyll build` on every push to `master`.

---

## 2. Content model — where raw content lives

All content is Markdown (or raw HTML) with YAML front matter. Jekyll classifies content into **collections**.

```
_posts/          ← blog posts (filename: YYYY-MM-DD-slug.md)
_publications/   ← papers (rendered with _layouts/publication.html)
_portfolio/      ← code / project pages
_talks/          ← invited talks, conference talks
_teaching/       ← taught courses
_pages/          ← standalone pages (About, CV, etc.) — NOT a collection, but included via _config.yml
_data/           ← structured data (navigation.yml, authors.yml, ui-text.yml)
_drafts/         ← unpublished drafts; Jekyll ignores these in prod builds
_includes/       ← reusable Liquid partials
_layouts/        ← page layouts (wrap content)
_sass/           ← SCSS partials compiled to assets/css/main.css
assets/          ← prebuilt CSS/JS/fonts
images/          ← all images (JPG/PNG + auto-generated .webp copies)
files/           ← downloadable assets (PDFs, slides) — served as-is
```

### Collections registry — [_config.yml](../_config.yml) lines 177–189

```yaml
collections:
  teaching:     { output: true, permalink: /:collection/:path/ }
  publications: { output: true, permalink: /:collection/:path/ }
  portfolio:    { output: true, permalink: /:collection/:path/ }
  talks:        { output: true, permalink: /:collection/:path/ }
```

`output: true` means each item gets its own rendered page. `permalink` determines URL structure; individual items can override via their own front matter.

### Per-type defaults — [_config.yml](../_config.yml) lines 193–246

Sets which layout each content type uses, whether to show author profile, sharing, comments, etc.

- `_posts` → `layout: single`
- `_publications` → `layout: publication` (custom, see [§5](#5-layouts))
- `_talks` → `layout: talk`
- Everything else → `layout: single`

### Authoring example

**A new blog post:** create `_posts/2026-04-18-my-topic.md`
```markdown
---
title: "My post"
date: 2026-04-18
---
Post body in Markdown...
```
URL becomes `/my-topic/` (derived from title via `permalink: /:categories/:title/` in [_config.yml:255](../_config.yml#L255)).

**A new publication:** copy [_drafts/publication-template.md](../_drafts/publication-template.md) into `_publications/` with a real filename. Fill in front matter (title, authors, venue, DOI, bibtex, image, etc.). Jekyll renders it via `_layouts/publication.html`.

---

## 3. Build pipeline — how Jekyll compiles

### Invocation chain

```
master push
  → GitHub Pages classic builder
    → bundle exec jekyll build --config _config.yml
      → writes fully-rendered HTML/CSS/JS to _site/
        → served at kartheekmedathati.github.io
```

Locally, the equivalent runs in the Podman container ([docker-compose.yml](../docker-compose.yml)):

```
make dev
  → podman compose up
    → jekyll/jekyll:4.2.2 container
      → bundle exec jekyll serve --config _config.yml,_config.dev.yml --drafts --livereload
```

Key flags in dev: `--drafts` renders `_drafts/`, `--livereload` auto-refreshes the browser.

### Compilation stages (per build)

1. **Read config** — merge `_config.yml` + (optionally) `_config.dev.yml`. Later files override earlier.
2. **Load plugins** — from `Gemfile` group `:jekyll_plugins`: `jekyll-sitemap`, `jekyll-feed`, `jekyll-paginate`, `jekyll-gist`, `jekyll-redirect-from`.
3. **Scan content** — walk `_posts/`, collections, `_pages/`, anything else in `include:` list.
4. **Parse front matter + body** — Markdown goes through `kramdown` (GFM dialect, line 166).
5. **Apply layouts** — each page picks a layout via front matter `layout:` or the per-type default. Layout chain runs inside-out:
   - Content page ([_publications/foo.md](../_publications/)) →
   - `_layouts/publication.html` (custom) →
   - `_layouts/default.html` (outer HTML skeleton) →
   - `_layouts/compress.html` (whitespace minification)
6. **Render Liquid templating** — `{{ ... }}` and `{% ... %}` tags resolved against `site`, `page`, `content`, etc.
7. **Compile Sass** — `_sass/**/*.scss` → `assets/css/main.css` (compressed in prod, expanded in dev).
8. **Copy static assets** — `assets/`, `images/`, `files/`, anything in `include:`, as-is.
9. **Write `_site/`** — the self-contained, deployable output.

---

## 4. Deployment — how it reaches the browser

| Branch → Host | URL | Mechanism |
|---|---|---|
| `master` → GitHub Pages | https://kartheekmedathati.github.io | Auto-rebuilt on every push by GH Pages classic builder |
| (none yet) → Custom domain | kartheek.info | DNS must point to GitHub Pages + CNAME file added (deferred) |

### GitHub Pages behavior
- Repo is named `<username>.github.io` → treated as user/organization site → default branch serves to domain root.
- No workflow file is required; GH Pages' classic builder runs a safe-listed subset of Jekyll plugins (those in [_config.yml:269–274](../_config.yml#L269-L274) `whitelist:`).
- Plugin set is fixed — you cannot ship arbitrary Jekyll plugins on classic Pages. For that you'd need a GitHub Action that builds and pushes to `gh-pages`, or use Netlify/Cloudflare Pages.

### Custom domain (kartheek.info) — not yet wired
What's needed when you're ready:
1. Add a file `CNAME` at repo root with single line `kartheek.info`.
2. At Porkbun DNS: `ALIAS/ANAME @ → kartheekmedathati.github.io` and `CNAME www → kartheekmedathati.github.io`.
3. GitHub repo → Settings → Pages → Custom domain: `kartheek.info`. Enforce HTTPS.

Until then, `kartheek.info` resolves to a placeholder page at Porkbun's default host (confirmed `server: openresty, content-length: 480`).

---

## 5. Layouts

Layouts wrap content. Chain is applied inside-out.

```
_layouts/
├── compress.html      ← outermost wrapper: minifies whitespace in prod
├── default.html       ← <html>, <head>, masthead, footer, scripts — almost every page uses this
├── single.html        ← default for posts and generic pages (title, body, sidebar, pagination)
├── publication.html   ← NEW — rich project page: hero, authors, venue, resource buttons, bibtex
├── talk.html          ← talk-specific rendering
├── splash.html        ← full-width landing
├── archive.html       ← archive index
└── archive-taxonomy.html ← tag/category landing
```

### Layout composition (for a publication page)

```
content/front-matter in _publications/foo.md
   ↓ layout: publication
_layouts/publication.html
   ↓ layout: default
_layouts/default.html
   ↓ layout: compress
_layouts/compress.html
   ↓ output
_site/publication/foo/index.html
```

---

## 6. Includes — reusable partials

`_includes/` has ~30 Liquid partials called from layouts via `{% include name.html %}`.

Key ones:
| Include | Purpose |
|---|---|
| [head.html](../_includes/head.html) | `<head>` contents — meta, CSS, feed link |
| [head/custom.html](../_includes/head/custom.html) | Site-specific extras — favicons, preconnect hints, MathJax |
| [masthead.html](../_includes/masthead.html) | Top navigation bar (reads `_data/navigation.yml`) |
| [sidebar.html](../_includes/sidebar.html) | Left sidebar (author profile) |
| [author-profile.html](../_includes/author-profile.html) | Avatar + bio + social links. Now uses `<picture>` for WebP. |
| [seo.html](../_includes/seo.html) | OpenGraph, Twitter Card, canonical URL meta |
| [archive-single.html](../_includes/archive-single.html) | One item in a list/grid. Grid mode now uses `<picture>`. |
| [page__hero.html](../_includes/page__hero.html) | Page hero image. Now uses `<picture>`. |
| [footer.html](../_includes/footer.html) | Footer region |
| [scripts.html](../_includes/scripts.html) | JS includes |

---

## 7. Asset pipeline

### CSS — SCSS compiled at build time

```
_sass/**/*.scss
  ↓ Jekyll's built-in sass-converter
assets/css/main.css   (compressed in prod; expanded in dev via _config.dev.yml)
```

Prebuilt CSS in `assets/css/` (`academicons.css`, `collapse.css`) is served as-is.

### JavaScript
Served directly from `assets/js/`. No bundling at present. Minimal Mistakes ships a pre-minified `main.min.js` via its theme chain.

### Images
- **Source images** live in [images/](../images/).
- **WebP variants** auto-generated by `make optimize-images` (runs a one-off ImageMagick container, outputs `filename.webp` alongside each `filename.jpg`/`.png`).
- Templates that reference images (`author-profile.html`, `archive-single.html`, `page__hero.html`, `publication.html`) use `<picture>` with `<source srcset=".webp" type="image/webp">` + JPG/PNG fallback in `<img>`. Browsers pick WebP automatically; older browsers fall back.
- **Markdown image syntax** (`![alt](/images/foo.jpg)`) in posts does **not** auto-serve WebP — those still use the original format.

---

## 8. Dev vs prod environments

Two configs, merged at build time:

| File | Role |
|---|---|
| [_config.yml](../_config.yml) | Base — used in prod. Sets `url: https://kartheekmedathati.github.io`, enables analytics, compresses SCSS. |
| [_config.dev.yml](../_config.dev.yml) | Dev overrides — `url: http://localhost:4000`, analytics off, SCSS expanded, drafts visible. |

### Local workflow

```bash
make install          # first run only: bundle install via container
make dev              # serve at http://localhost:4000 (foreground, live-reload)
make up               # serve in background
make logs             # tail logs
make down             # stop and remove container
make build            # prod build into _site/
make shell            # interactive shell in container
make optimize-images  # regenerate .webp copies for any new JPG/PNG in images/
make clean            # delete _site/, caches
make nuke             # clean + wipe gem cache volume
```

### Container networking
`docker-compose.yml` uses `network_mode: host` with `--host localhost`. This matters: earlier attempts used `--host 0.0.0.0` which caused Jekyll to emit asset URLs like `http://0.0.0.0:4000/...` that browsers refuse to load. Host networking lets Jekyll bind to `localhost` directly so generated URLs are routable.

---

## 9. File-by-file map (root)

```
_config.yml              Main config — site settings, collections, plugins, defaults
_config.dev.yml          Dev-only overrides merged via --config flag
Gemfile                  Ruby deps — pinned to github-pages gem
Gemfile.lock             Exact resolved versions (committed for reproducibility)
docker-compose.yml       Podman service definition for local dev
Makefile                 Wrapper commands for common tasks
.gitignore               Excludes _site/, vendor/, .jekyll-cache/, etc.

_pages/about.md          Front page (permalink: /)
_pages/publications.md   Publications listing
_pages/cv.md             CV page
_pages/talks.html        Talks listing
_pages/portfolio.html    Projects listing
_pages/teaching.html     Teaching listing
_pages/404.md            Custom 404

Handybot_future.html     *** Legacy standalone HTML (not theme-integrated) ***
index_backup.html        *** Obsolete backup — candidate for deletion ***
open_source_robot_design_database/  *** Sub-site of raw HTML — not Jekyll-rendered ***

CHANGELOG.md             Theme upstream changelog (keep for reference)
CONTRIBUTING.md          Theme upstream — can be removed or replaced
LICENSE                  MIT (from Minimal Mistakes)
README.md                Basic fork instructions
```

Items marked `***` are outside the Jekyll content pipeline — they're copied to `_site/` verbatim with no layout applied. See [§10](#10-known-tech-debt--open-items).

---

## 10. Known tech debt / open items

Carrying these forward from earlier audits; update this list as items are resolved.

- `_pages/404.md` — verify it renders as `/404.html` (GH Pages requires that exact path).
- `Handybot_future.html`, `index_backup.html`, `open_source_robot_design_database/` — raw HTML outside the theme; decide whether to quarantine under `_drafts/`, convert to Jekyll pages, or delete.
- 4 unmerged `dependabot/bundler/*` branches on origin — review or close.
- CI — no automated build/link-check; a GitHub Action running `htmlproofer` + Lighthouse would catch regressions before merge.
- Post/content Markdown images don't auto-use WebP (see [§7](#7-asset-pipeline)).

---

## 11. Where to edit what

| I want to… | Edit… |
|---|---|
| Change site name / description / social handles | [_config.yml](../_config.yml) (lines 10–15, 58–72) |
| Add a nav menu item | [_data/navigation.yml](../_data/navigation.yml) |
| Change the author profile / avatar / bio | [_config.yml](../_config.yml) (`author:` block, lines 82–117) |
| Add a blog post | New file in [_posts/](../_posts/) with filename `YYYY-MM-DD-slug.md` |
| Add a publication | Copy [_drafts/publication-template.md](../_drafts/publication-template.md) → [_publications/](../_publications/) |
| Tweak the publication page layout | [_layouts/publication.html](../_layouts/publication.html) |
| Add a hero image to a page | Add `image:` (publications) or `header.image:` (pages) to front matter, drop file in [images/](../images/), run `make optimize-images` |
| Change site-wide CSS | [_sass/](../_sass/) (full rebuild) or [_includes/head/custom.html](../_includes/head/custom.html) (inline styles) |
| Change head-level meta / favicons / analytics | [_includes/head/custom.html](../_includes/head/custom.html) |
| Switch dev behavior (drafts, analytics, URL) | [_config.dev.yml](../_config.dev.yml) |
