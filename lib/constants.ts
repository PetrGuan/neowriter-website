export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://neowriter.app").replace(/\/$/, "");
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function sitePath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export const SUPPORT_EMAIL = "neowriter@outlook.com";
export const PRIVACY_URL = sitePath("/privacy/");
export const TERMS_URL = sitePath("/terms/");
export const APPLE_EULA_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

// Add the verified listing when the app is published. Never use a placeholder.
export const APP_STORE_URL: string | null = null;
