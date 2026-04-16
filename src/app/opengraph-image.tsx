import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — community nonprofit`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #faf9f7 0%, #f3f1ec 45%, #e7e5e0 100%)",
          color: "#292524",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", color: "#57534e" }}>
          Pinellas Park · Nonprofit
        </div>
        <div style={{ marginTop: 18, fontSize: 58, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 26, maxWidth: 880, lineHeight: 1.4, color: "#44403c" }}>
          Five-star community resources, flagship events, and local outreach—built grassroots, delivered with
          heart.
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            fontSize: 20,
            fontWeight: 600,
            color: "#292524",
          }}
        >
          <span
            style={{
              borderRadius: 999,
              padding: "12px 22px",
              background: "rgba(255,255,255,0.85)",
              border: "1px solid #d6d3d1",
            }}
          >
            Community events
          </span>
          <span
            style={{
              borderRadius: 999,
              padding: "12px 22px",
              background: "rgba(255,255,255,0.85)",
              border: "1px solid #d6d3d1",
            }}
          >
            Entrepreneurship support
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
