---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% if author.googlescholar %}
<p class="pub-scholar">You can also find my articles on <a href="{{ author.googlescholar }}">my Google Scholar profile</a>.</p>
{% endif %}

<style>
.pub-scholar { font-size:.9em; color:#555; margin-bottom:1.2em; }
.pub-list { margin-top:.5em; }
.pub-card { display:flex; gap:1.1em; padding:1.1em 0; border-bottom:1px solid #ececec; align-items:flex-start; }
.pub-card:last-child { border-bottom:0; }
.pub-card__fig { flex:0 0 200px; display:block; }
.pub-card__fig img { width:200px; height:140px; object-fit:cover; object-position:center; border:1px solid #e6e8eb; border-radius:6px; display:block; }
.pub-card__body { flex:1 1 auto; min-width:0; }
.pub-card--nofig .pub-card__body { flex:1 1 100%; }
.pub-card__title { font-size:1.05em; line-height:1.35; margin:0 0 .35em; }
.pub-card__title a { text-decoration:none; }
.pub-card__title a:hover { text-decoration:underline; }
.pub-card__meta { margin:.15em 0 .45em; }
.pub-venue { font-style:italic; color:#33414f; font-size:.88em; font-weight:500; }
.pub-year { color:#8a8f98; font-size:.85em; margin-left:.35em; }
.pub-card__authors { font-size:.85em; color:#555; margin:.15em 0 .35em; }
.pub-card__excerpt { font-size:.9em; color:#444; margin:.2em 0 .65em; line-height:1.5; }
.pub-card__links { display:flex; flex-wrap:wrap; gap:.45em; }
.pub-btn { display:inline-block; font-size:.8em; line-height:1.3; padding:.32em .85em; border-radius:5px; border:1px solid #1f2937; color:#1f2937; text-decoration:none; transition:background .15s,color .15s; }
.pub-btn:hover { background:#1f2937; color:#fff; text-decoration:none; }
.pub-btn--primary { background:#1f2937; color:#fff; }
.pub-btn--primary:hover { background:#374151; }
.pub-cite { margin:0; }
.pub-cite summary { cursor:pointer; list-style:none; }
.pub-cite summary::-webkit-details-marker { display:none; }
.pub-cite[open] { flex-basis:100%; }
.pub-cite__text { background:#f7f7f7; padding:.7em .8em; border-radius:5px; margin:.5em 0 0; line-height:1.5; font-size:.85em; }
.pub-cite__text p { margin:0; }
@media (max-width:600px){ .pub-card{flex-direction:column; align-items:flex-start; gap:.6em;} .pub-card__fig{flex-basis:auto; width:100%;} .pub-card__fig img{width:100%; height:180px; object-fit:cover;} }
</style>

<div class="pub-list">
{% for post in site.publications reversed %}
  {% assign teaser = post.header.teaser %}
  {% assign teaser_src = "" %}
  {% if teaser %}
    {% if teaser contains "://" %}
      {% assign teaser_src = teaser %}
    {% elsif teaser contains "/" %}
      {% assign teaser_src = teaser | prepend: base_path %}
    {% else %}
      {% assign teaser_src = teaser | prepend: "/images/" | prepend: base_path %}
    {% endif %}
  {% endif %}
  {% assign main_link = post.paperurl %}
  {% unless main_link %}{% assign main_link = post.url | prepend: base_path %}{% endunless %}
  <div class="pub-card{% if teaser_src == '' %} pub-card--nofig{% endif %}">
    {% if teaser_src != '' %}
    <a class="pub-card__fig" href="{{ main_link }}"><img src="{{ teaser_src }}" alt="Figure from: {{ post.title | strip_html }}" loading="lazy" decoding="async"></a>
    {% endif %}
    <div class="pub-card__body">
      <h3 class="pub-card__title"><a href="{{ main_link }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</a></h3>
      <p class="pub-card__meta"><span class="pub-venue">{{ post.venue_short | default: post.venue | strip }}</span><span class="pub-year">· {{ post.date | default: "1900-01-01" | date: "%Y" }}</span></p>
      {% if post.authors %}<p class="pub-card__authors">{{ post.authors }}</p>{% endif %}
      {% if post.excerpt %}<p class="pub-card__excerpt">{{ post.excerpt | markdownify | remove: "<p>" | remove: "</p>" }}</p>{% endif %}
      <div class="pub-card__links">
        {% if post.paperurl %}<a class="pub-btn pub-btn--primary" href="{{ post.paperurl }}">Paper / DOI</a>{% endif %}
        {% if post.links.pdf %}<a class="pub-btn" href="{{ post.links.pdf }}">PDF</a>{% endif %}
        {% if post.links.code %}<a class="pub-btn" href="{{ post.links.code }}">Code</a>{% endif %}
        {% if post.links.arxiv %}<a class="pub-btn" href="{{ post.links.arxiv }}">arXiv</a>{% endif %}
        {% if post.citation %}<details class="pub-cite"><summary class="pub-btn">Cite</summary><div class="pub-cite__text">{{ post.citation | markdownify }}</div></details>{% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>
