import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mouthPosition, setMouthPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setMouthPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mouthPosition;
}
