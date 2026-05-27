"use client";

export default function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-1"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(42, 183, 255, 0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}
