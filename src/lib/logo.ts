import fs from "node:fs";
import path from "node:path";

/**
 * Detects whether the official logo file has been provided.
 * Drop the official logo at: public/images/logo.png
 * (a dev-server restart or a rebuild picks it up automatically).
 */
export function findOfficialLogo(): string | null {
  try {
    const file = path.join(process.cwd(), "public", "images", "logo.png");
    if (fs.existsSync(file)) return "/images/logo.png";
    return null;
  } catch {
    return null;
  }
}
