# Custom domain: `https://dg-create.com/codex/`

The album site is built with base path `/codex/` and hosted on GitHub Pages at
`https://dimageier.github.io/codex/`. Your root domain (`dg-create.com`) runs on
Shopify behind Cloudflare, so `/codex` is served by a **Cloudflare Worker** that
proxies to GitHub Pages.

## 1. Keep GitHub Pages deploying (already set up)

Push to `main` — Actions deploy to `dimageier.github.io/codex/` as today.

## 2. Deploy the Cloudflare Worker

1. Log in: [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages**.
2. Install Wrangler locally (once):

   ```bash
   npm install -g wrangler
   wrangler login
   ```

3. From the website folder:

   ```bash
   cd ~/Projects/Codex/website/deploy
   wrangler deploy
   ```

4. In the dashboard, open the worker **dg-create-codex-proxy** → **Settings** → **Triggers** → **Routes** → Add:

   | Route |
   |-------|
   | `dg-create.com/codex` |
   | `dg-create.com/codex/*` |
   | `www.dg-create.com/codex` |
   | `www.dg-create.com/codex/*` |

   Route order: Worker routes must run **before** traffic hits Shopify. Cloudflare applies the most specific matching route.

5. Test:

   ```bash
   curl -sI https://dg-create.com/codex/ | head -5
   curl -sI https://dg-create.com/codex/cover.jpg | head -5
   ```

   Expect `200` and HTML or `image/jpeg` / `video/mp4`, not Shopify 404.

## 3. Optional: API token deploy with routes in `wrangler.toml`

Create a token with **Workers Scripts** + **Workers Routes** edit on zone `dg-create.com`, then uncomment `routes` in `deploy/wrangler.toml` and run:

```bash
export CLOUDFLARE_API_TOKEN="..."
cd deploy && wrangler deploy
```

## Notes

- **Do not** change the Vite base path — it stays `/codex/` for both GitHub Pages and the custom path.
- Shopify and `/codex` can coexist; only paths under `/codex` go to GitHub Pages.
- If you later move hosting off GitHub, point the worker `UPSTREAM` in `codex-proxy-worker.js` to your new origin.