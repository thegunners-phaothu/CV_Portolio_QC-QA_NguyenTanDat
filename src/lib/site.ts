/**
 * Resolves the canonical site URL from NEXT_PUBLIC_SITE_URL.
 * In production builds a missing/invalid value fails loudly; in development
 * it falls back to localhost (never emitted for production).
 */
export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      const url = new URL(raw);
      if (url.protocol === "http:" || url.protocol === "https:") return url;
    } catch {
      /* fall through */
    }
    throw new Error(`NEXT_PUBLIC_SITE_URL must be an absolute http(s) URL. Received: "${raw}"`);
  }
  if (process.env.NODE_ENV === "production" && process.env.ALLOW_MISSING_SITE_URL !== "1") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required for production builds (e.g. https://your-domain.com).",
    );
  }
  return new URL("http://localhost:3000");
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, getSiteUrl()).toString();
}
