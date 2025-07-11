import { useEffect, useState } from "react";

export function useElementPosition(id: string) {
  const [position, setPosition] = useState<{ top: number; left: number; height: number } | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        height: rect.height,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [id]);

  return position;
}
