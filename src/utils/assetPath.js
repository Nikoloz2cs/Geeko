// Resolves a root-relative path (e.g. "/images/products/x/main.jpg") against
// whatever base path the app is currently deployed under. In dev this is "/",
// so paths behave exactly as before. In the GitHub Pages build, this
// automatically prefixes with "/Geeko/" so images actually resolve.
export function assetPath(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
