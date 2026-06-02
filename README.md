# CODEX Album Website

**Status: complete** (June 2026)

Futuristic microsite for **Codex** by Dimitri Geier.

**Live site:** https://dg-create.com/codex/ (proxied from [GitHub Pages](https://dimageier.github.io/codex/))

Custom domain setup: [deploy/CUSTOM_DOMAIN.md](deploy/CUSTOM_DOMAIN.md)

- [Apple Music](https://music.apple.com/us/album/codex/6775315893)
- [Spotify](https://open.spotify.com/album/1LdnuUwln9Whj8bOUtPUc3)

## Local development

```bash
npm install
./scripts/setup-assets.sh    # symlinks to ~/Projects/Codex/assets (full media)
npm run dev
```

## Deploy assets (GitHub Pages)

Committed `public/` uses bundled images and audio previews (no symlinks):

```bash
./scripts/bundle-deploy-assets.sh
./scripts/generate-previews.sh   # optional refresh
```

Push to `main` — GitHub Actions deploys to Pages automatically.

## Build

```bash
npm run build        # local
npm run build:pages  # production base path /codex/
```