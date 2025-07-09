import { guideStore } from "../../stores/guideStore";
import TOOLTIPCONSTANTS from "../../constants/toolTipConstants";
import RenderedTooltip from "./RenderedTooltip";

export default function RenderGuideContainer() {
  const { learningIsStarted, currentTooltipIndex, canceledGuide } = guideStore();
  let nextTooltipId: string = TOOLTIPCONSTANTS[currentTooltipIndex]?.elementId;
  const shouldRenderTooltip: boolean =  !canceledGuide && learningIsStarted;

  if (!shouldRenderTooltip) return null; 
  
  return <RenderedTooltip children={nextTooltipId} />
}
