/**
 * Returns the Next.js basePath at runtime.
 * In production this matches the value configured in next.config.ts;
 * in development it returns an empty string.
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === "production"
    ? "/CV_Portolio_QC-QA_NguyenTanDat"
    : "";
}

/**
 * Prefix a public-folder asset path with basePath so it resolves
 * correctly on GitHub Pages (or any sub-path deployment).
 *
 * Usage: `<a href={withBasePath("/file.pdf")}>`
 */
export function withBasePath(path: string): string {
  const base = getBasePath();
  if (!path.startsWith("/")) return path; // already relative or absolute URL
  return `${base}${path}`;
}
