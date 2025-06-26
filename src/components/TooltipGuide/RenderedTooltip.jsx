import Tooltip from "./TooltipComponent/Tooltip"
import useTooltipPosition from '../../hooks/useTooltipPosition'

export default function RenderedTooltip({ tooltipId }) {
  const { styles, tooleTipData } = useTooltipPosition(tooltipId);

  if (!tooleTipData) return null;

  return (
    <div style={styles}>
      <Tooltip data={tooleTipData} />
    </div>
  );
}