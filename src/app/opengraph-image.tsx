import { ImageResponse } from "next/og";

export const alt = "DrugZero Bangladesh — For a drug-free tomorrow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded Open Graph card (kept simple and consistent with the site palette). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1E4937",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "10px",
              backgroundColor: "#A7C7A2",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.01em",
            }}
          >
            DrugZero Bangladesh
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Working together for a drug-free Bangladesh
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#A7C7A2",
              fontWeight: 500,
            }}
          >
            For a drug-free tomorrow
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Awareness · Education · Youth engagement · Community outreach
        </div>
      </div>
    ),
    { ...size }
  );
}
