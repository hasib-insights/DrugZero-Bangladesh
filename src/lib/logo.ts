import fs from "node:fs";
import path from "node:path";

/**
 * Detects whether the official logo file has been provided, and returns the
 * public path of the variant that suits the site's LIGHT surfaces (navbar on
 * white, footer on #f3f5f0).
 *
 * Official assets (in preference order):
 *   public/images/logo-on-light.svg / .png — light-surface variant
 *     (headline recolored to brand green #1E4937; geometry identical)
 *   public/images/logo.svg / .png          — official file as provided
 *     (white headline; intended for the brand's dark-green surfaces)
 *
 * A dev-server restart or a rebuild picks new files up automatically.
 */
export function findOfficialLogo(): string | null {
  const candidates = [
    "/images/logo-on-light.svg",
    "/images/logo-on-light.png",
    "/images/logo.svg",
    "/images/logo.png",
  ];
  try {
    for (const candidate of candidates) {
      if (fs.existsSync(path.join(process.cwd(), "public", candidate))) {
        return candidate;
      }
    }
    return null;
  } catch {
    return null;
  }
}
