/** Resolve public-folder paths for GitHub Pages base (/codex/) and local dev (/). */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}