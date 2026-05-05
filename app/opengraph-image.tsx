import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Medecro – Clinical Intelligence, Reimagined";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 60%, #0F172A 100%)",
          position: "relative",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 24, fontWeight: 800 }}>M</span>
          </div>
          <span style={{ color: "white", fontSize: 28, fontWeight: 700 }}>Medecro</span>
          <span
            style={{
              marginLeft: 12,
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.4)",
              color: "#6EE7B7",
              fontSize: 13,
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: 999,
            }}
          >
            AI-Powered Clinic OS
          </span>
        </div>

        {/* Main text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Clinical Intelligence,
            <br />
            Reimagined.
          </h1>
          <p style={{ fontSize: 24, color: "#94A3B8", margin: 0, maxWidth: 680 }}>
            AI-powered clinic management built for Indian doctors — 2,000+ clinics across 9 cities.
          </p>
        </div>

        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #2563EB, #10B981)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
