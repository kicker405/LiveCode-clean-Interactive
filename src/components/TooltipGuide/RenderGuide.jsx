import guideStore from "../../stores/guideStore";
import TOOLTIPCONSTANTS from "../../constants/toolTipConstants";
import RenderedTooltip from "./RenderedTooltip";

export default function RenderGuideContainer() {
  const { learningIsStarted, currentTooltipIndex, canceledGuide } = guideStore();
  const nextTooltip = TOOLTIPCONSTANTS.find((tooltip) => tooltip.id === currentTooltipIndex)?.elementId;
  const shouldRenderTooltip =  !canceledGuide && learningIsStarted;

  if (!shouldRenderTooltip) return null; 
  
  return <RenderedTooltip tooltipId={nextTooltip} />
}
