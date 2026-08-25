import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            fontSize: "110px",
            fontWeight: "900",
            color: "#0a0e1a",
            fontFamily: "Arial, Helvetica, sans-serif",
            lineHeight: 1,
            marginTop: "-8px",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size }
  );
}