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
          background: "linear-gradient(135deg, #0b1220 0%, #312e81 45%, #1d4ed8 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>
          Pinellas Park · Nonprofit
        </div>
        <div style={{ marginTop: 18, fontSize: 64, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, maxWidth: 880, lineHeight: 1.35, opacity: 0.92 }}>
          Five-star community resources, flagship events, and local outreach—built grassroots, delivered
          with heart.
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span
            style={{
              borderRadius: 999,
              padding: "12px 22px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            Community events
          </span>
          <span
            style={{
              borderRadius: 999,
              padding: "12px 22px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
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
