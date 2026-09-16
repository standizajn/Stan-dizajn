import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "90px",
          background: "#141414",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 44,
            letterSpacing: 4,
            textTransform: "uppercase",
            border: "2px solid #ffffff",
            padding: "16px 28px",
          }}
        >
          {siteMeta.brand}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 56,
            lineHeight: 1.25,
            maxWidth: 900,
            color: "#f2f2f2",
          }}
        >
          Dizajn enterijera & nameštaj po meri
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "#b5673d" }}>
          {siteMeta.city}, Srbija
        </div>
      </div>
    ),
    { ...size }
  );
}
