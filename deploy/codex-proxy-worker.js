/**
 * Proxies https://dg-create.com/codex/* to the GitHub Pages build.
 * Shopify (or other origin) continues to serve the rest of the site.
 */
const UPSTREAM = "https://dimageier.github.io";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/codex") {
      return Response.redirect(`${url.origin}/codex/`, 301);
    }

    const upstream = new URL(`${url.pathname}${url.search}`, UPSTREAM);
    const headers = new Headers(request.headers);
    headers.set("Host", "dimageier.github.io");

    const response = await fetch(upstream, {
      method: request.method,
      headers,
      redirect: "follow",
    });

    const out = new Headers(response.headers);
    out.delete("content-security-policy");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: out,
    });
  },
};