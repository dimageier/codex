/** Public site URL (custom domain + /codex/ path). */
export const SITE_ORIGIN =
  import.meta.env.VITE_SITE_ORIGIN ?? "https://dg-create.com";

export function siteUrl(path = ""): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${SITE_ORIGIN}${base}${normalized}`;
}