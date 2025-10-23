"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const hoverIn = () => setHovered(true);
    const hoverOut = () => setHovered(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${hovered ? "hovered" : ""}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
