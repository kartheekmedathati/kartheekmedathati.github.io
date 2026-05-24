COMPOSE := podman compose
IMG_IMAGE := docker.io/dpokidov/imagemagick:latest

.PHONY: help install dev up logs stop down build shell clean nuke optimize-images

help:
	@echo "Targets:"
	@echo "  make install  first-run: install Ruby gems into bundle-cache volume"
	@echo "  make dev      foreground serve + streaming logs at http://localhost:4000"
	@echo "  make up       background serve"
	@echo "  make logs     tail logs of background container"
	@echo "  make stop     stop container (keep volumes)"
	@echo "  make down     stop + remove container"
	@echo "  make build    production build into _site/"
	@echo "  make shell    open bash inside the container"
	@echo "  make clean    remove generated files"
	@echo "  make nuke     clean + drop all volumes (forces gem reinstall)"

install:
	$(COMPOSE) run --rm jekyll bundle install

dev:
	$(COMPOSE) up

up:
	$(COMPOSE) up -d

logs:
	$(COMPOSE) logs -f

stop:
	$(COMPOSE) stop

down:
	$(COMPOSE) down

build:
	$(COMPOSE) run --rm jekyll bundle exec jekyll build --config _config.yml

shell:
	$(COMPOSE) run --rm jekyll /bin/bash

clean:
	rm -rf _site .jekyll-cache .jekyll-metadata

nuke: clean
	$(COMPOSE) down -v

optimize-images:
	@echo "Generating .webp alongside JPG/PNG in images/ (skips existing .webp)"
	podman run --rm --userns=keep-id \
	  --entrypoint="" \
	  -v "$(CURDIR)/images:/imgs:Z" \
	  $(IMG_IMAGE) \
	  sh -c 'cd /imgs && for f in *.jpg *.jpeg *.JPG *.JPEG *.png *.PNG; do \
	    [ -f "$$f" ] || continue; \
	    name="$${f%.*}"; \
	    [ -f "$${name}.webp" ] && continue; \
	    magick "$$f" -strip -quality 85 "$${name}.webp" && echo "  $$f -> $${name}.webp"; \
	  done'
	@echo ""
	@echo "Before/after for largest images:"
	@for f in images/*.webp; do \
	  base=$${f%.webp}; \
	  for ext in jpg jpeg png JPG JPEG PNG; do \
	    orig="$${base}.$${ext}"; \
	    if [ -f "$$orig" ]; then \
	      printf '  %-50s %s -> %s\n' "$$(basename $$orig)" "$$(du -h $$orig | cut -f1)" "$$(du -h $$f | cut -f1)"; \
	    fi; \
	  done; \
	done | sort
