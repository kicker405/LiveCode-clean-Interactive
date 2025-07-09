import { useEffect, useRef, useState } from "react";
import TOOLTIPCONSTANTS from "../constants/toolTipConstants";
import { guideStore } from "../stores/guideStore";
import { CSSProperties } from "@mui/material";
import { TToolTipData } from "../types/components/tooltip";

export default function useTooltipPosition(referenceId: string) {
  const currentTooltipIndex = guideStore((state) => state.currentTooltipIndex);
  const toolTipData: TToolTipData | undefined = TOOLTIPCONSTANTS.find(tool => tool.elementId === referenceId);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [heightOffset, setHeightOffset] = useState<number>(0);
  const scrollTriggeredRef = useRef(false);

  useEffect(() => {
    if (!referenceId || !toolTipData) return;

    const updatePosition = () => {
      const tooltipElement = document.getElementById(referenceId);
      if (!tooltipElement) return;

      const rect = tooltipElement.getBoundingClientRect();
      setHeightOffset(rect.height);
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });

      if (!scrollTriggeredRef.current && rect.top > window.innerHeight - 600 && currentTooltipIndex < TOOLTIPCONSTANTS.length - 1) {
        scrollTriggeredRef.current = true;
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: "smooth",
        });
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [referenceId, toolTipData, currentTooltipIndex]);

  const styles: CSSProperties =
    position && toolTipData
      ? {
          ...toolTipData.styles,
          transform: `translate(0%, ${heightOffset}px)`,
          position: "absolute",
          top: position.top,
          left: position.left,
          zIndex: 1000,
        }
      : { display: "none" };

  return { styles, toolTipData };
}
