const fullPath = (document.currentScript as any)?.src ?? '';

export const DISTRIBUTION_URL = fullPath.substring(0, fullPath.lastIndexOf('/'));
const getAssetUrl = (path: string) => `${DISTRIBUTION_URL}/assets/${path}`;

export default getAssetUrl;
