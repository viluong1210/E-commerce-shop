import React from "react";

type Props = {
  content: string;
  title: string;
};

export default function Label({ content, title }: Props) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#D3D3D3",
        padding: "8px 12px",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: "bold", width: "100%" }}>
        {title}
      </div>
      <div style={{ fontSize: 18, width: "100%" }}>{content}</div>
    </div>
  );
}
