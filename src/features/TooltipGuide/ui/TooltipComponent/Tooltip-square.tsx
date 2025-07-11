import "./Tooltip.css";
import TooltipBtns from "../TooltipBtns/TooltipBtns"; 
import { TTooltipProps } from "../../models/types/tooltipComponent";

export default function Tooltip({data}: TTooltipProps) {
  return (
  <div className="tooltip">
    <div className="tooltip__content">
      <img src='#' alt="" className="tooltip__image"/>
      <h2 className="tooltip__h2">{data.elementTitle}</h2>
      <p className="tooltip__text">
        {data.elementText}
      </p>
      <TooltipBtns />
    </div>
  </div>
  )
}
