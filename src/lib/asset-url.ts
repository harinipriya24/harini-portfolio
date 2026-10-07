// Lovable's asset proxy is not available on external hosts such as Vercel.
const assetOrigin = "https://id-preview--ddbdbed2-0fd0-4c91-ae9e-72d2e5733336.lovable.app";

export function assetUrl(path: string): string {
  return path.startsWith("/__l5e/assets-v1/") ? `${assetOrigin}${path}` : path;
}