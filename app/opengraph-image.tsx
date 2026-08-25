import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0e1a 0%, #111827 100%)",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(167, 139, 250, 0.06)",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#0a0e1a",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              R
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "white",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              RoboGyaan
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              रोबो ज्ञान · Robotics for Indian classrooms
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "58px",
              fontWeight: "900",
              color: "white",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.1,
            }}
          >
            Kids don&apos;t just
          </span>
          <span
            style={{
              fontSize: "58px",
              fontWeight: "900",
              color: "white",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.1,
            }}
          >
            use technology.
          </span>
          <span
            style={{
              fontSize: "58px",
              fontWeight: "900",
              background: "linear-gradient(90deg, #22d3ee, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1.1,
            }}
          >
            They build it.
          </span>
        </div>

        {/* URL pill */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              borderRadius: "24px",
              background: "linear-gradient(90deg, #facc15, #f59e0b)",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#0a0e1a",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              robogyaan.in
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}