// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fullPath = (document.currentScript as any)?.src ?? "";

export const DISTRIBUTION_URL = fullPath.substring(
  0,
  fullPath.lastIndexOf("/")
);

export const getAssetUrl = (path: string) =>
  `${DISTRIBUTION_URL}/assets/${path}`;

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
