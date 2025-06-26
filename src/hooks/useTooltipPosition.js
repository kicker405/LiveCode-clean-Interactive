import { useEffect, useState } from "react";
import TOOLTIPCONSTANTS from "../constants/toolTipConstants";
import guideStore from "../stores/guideStore";

export default function useTooltipPosition(referenceId) {
  const currentTooltipIndex = guideStore((state) => state.currentTooltipIndex)
  const tooleTipData = TOOLTIPCONSTANTS.find(tool => tool.elementId === referenceId);
  const [position, setPosition] = useState(null); 
  let scrollHeight = 0;

  const scrollFunction = () => {
    let k = TOOLTIPCONSTANTS.length-1 
    if (scrollHeight > window.innerHeight- 600 && currentTooltipIndex<k) {
      console.log(currentTooltipIndex)
      window.scrollTo({
        top: scrollHeight + window.scrollY,
        behavior: "smooth", 
      });
    }
  }

  const updatePosition = () => {
    const tooltipElement = document.getElementById(referenceId);
    if (!tooltipElement) return;

    const rect = tooltipElement.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });    
    scrollHeight=rect.top;
  };

  useEffect(() => {
    if (!referenceId) return;
    updatePosition()
    scrollFunction()
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
  }, [referenceId]);

  const styles = position && tooleTipData ? {
    ...tooleTipData.styles, 
    position: "absolute",
    top: position.top,
    left: position.left,
    zIndex: 1000,
  } : { display: "none" };

  return { styles, tooleTipData };
}