import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site";

/** Simple health endpoint. */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    site: siteConfig.name,
    tagline: siteConfig.tagline,
  });
}
