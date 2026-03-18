/**
 * Prepends the base path to asset URLs.
 * Handles GitHub Pages deployment where assets are under /capol/
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return path;
  // Don't double-prefix
  if (basePath && path.startsWith(basePath)) return path;
  // Only prefix absolute paths
  if (path.startsWith('/')) return `${basePath}${path}`;
  return path;
}
