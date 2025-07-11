//import { Stage, Layer, Circle } from "react-konva";
import TooltipBtns from "../TooltipBtns/TooltipBtns";
import { TTooltipProps } from "../../models/types/tooltipComponent";
import { TPosition } from "../../models/types/tooltipComponent";

export default function TooltipCircle({ data }:TTooltipProps) {
  let position = {
    position: "absolute" as TPosition,
    top: data.styles.y,
    left: data.styles.x,
    transform: 'translate(-50%, -50%)'
  }
  return (
    <div>
      <svg width={300} height={300} style={{ overflow: "visible" }}>
        <circle cx={data.styles.x} cy={data.styles.y} r={data.styles.r} fill="#6789ff" stroke="black" strokeWidth="2"/>
      </svg>
      <div style={position} className="tooltip__circle-content"  >
        <img src='#' alt="" className="tooltip__image" />
        <h2 className="tooltip__h2">{data.elementTitle}</h2>
        <p>
            {data.elementText}
        </p>
        <TooltipBtns />
      </div>

    </div>
  );
}
