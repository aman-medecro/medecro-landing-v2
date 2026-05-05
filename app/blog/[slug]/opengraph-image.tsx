import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/blog-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogOGImage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

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
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
          position: "relative",
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 22, fontWeight: 800 }}>M</span>
          </div>
          <span style={{ color: "white", fontSize: 24, fontWeight: 700 }}>Medecro</span>
          {post && (
            <span
              style={{
                marginLeft: 16,
                background: "rgba(37,99,235,0.3)",
                border: "1px solid rgba(37,99,235,0.5)",
                color: "#93C5FD",
                fontSize: 13,
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 999,
              }}
            >
              {post.category}
            </span>
          )}
        </div>

        {/* Main: title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1
            style={{
              fontSize: post && post.title.length > 60 ? 44 : 52,
              fontWeight: 800,
              color: "white",
              margin: 0,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {post?.title ?? "Medecro Blog"}
          </h1>
          {post && (
            <p style={{ fontSize: 20, color: "#94A3B8", margin: 0 }}>
              {post.readTime} · {post.dateDisplay}
            </p>
          )}
        </div>

        {/* Bottom accent bar */}
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
