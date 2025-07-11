import { CSSProperties } from "react";
import TOOLTIPCONSTANTS from "../../models/constants/toolTipConstants";
import { guideStore } from "../../models/stores/guideStore";
import { useElementPosition } from "./useElementPosition";

export function useTooltipPosition(referenceId: string) {
  const currentTooltipIndex = guideStore((s) => s.currentTooltipIndex);
  const toolTipData = TOOLTIPCONSTANTS.find(t => t.elementId === referenceId);
  const position = useElementPosition(referenceId);

  const styles: CSSProperties = position && toolTipData ? {
    ...toolTipData.styles,
    transform: `translate(0%, ${position.height}px)`,
    position: "absolute",
    top: position.top,
    left: position.left,
    zIndex: 1000,
  } : { display: "none" };

  return { styles, toolTipData };
}
