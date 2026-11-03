/**
 * Resolves the public base URL of the website.
 *
 * Configure once per environment with NEXT_PUBLIC_SITE_URL, e.g.:
 *   NEXT_PUBLIC_SITE_URL="https://www.your-domain.org"
 *
 * It is used for canonical URLs, Open Graph metadata, sitemap.xml and
 * robots.txt. Do not hardcode a domain here.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const base = raw && raw.length > 0 ? raw : "http://localhost:3000";
  return base.replace(/\/+$/, "");
}
