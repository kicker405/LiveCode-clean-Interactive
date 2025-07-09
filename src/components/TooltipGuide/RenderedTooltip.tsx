import TooltipSquare from "./TooltipComponent/Tooltip-square"
import TooltipCircle from "./TooltipComponent/Tooltip-circle"
import useTooltipPosition from '../../hooks/useTooltipPosition'
import { IChildrenProps } from "../../types/common";

export default function RenderedTooltip({ children }: IChildrenProps<string>) {
  const { styles, toolTipData } = useTooltipPosition(children);

  if (!toolTipData) return null;

  return (
    <div style={styles}>
      {
      toolTipData.type === 'circle' ? <TooltipCircle data={toolTipData} /> : <TooltipSquare data={toolTipData} />
      }
    </div>
  );
}