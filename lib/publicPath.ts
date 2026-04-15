/**
 * URL файла из `public/` с учётом `basePath` (GitHub Pages: /Mangal).
 * Без префикса запросы уходят на github.io/images/... вместо .../Mangal/images/...
 */
export function publicUrl(pathFromPublicRoot: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const path = pathFromPublicRoot.startsWith('/')
    ? pathFromPublicRoot
    : `/${pathFromPublicRoot}`;
  return `${base}${path}`;
}
