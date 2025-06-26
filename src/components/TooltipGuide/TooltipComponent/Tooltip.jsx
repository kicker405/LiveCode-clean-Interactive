import "./Tooltip.css";
import TooltipBtns from "../TooltipBtns/TooltipBtns"; 

export default function Tooltip({data}) {
  return (
  <div className="tooltip">
    <div className="tooltip__content">
      <img src={data.elementImg} alt="" className="tooltip__image"/>
      <h2 className="tooltip__h2">{data.elementH2}</h2>
      <p className="tooltip__text">
        {data.elementText}
      </p>
      <TooltipBtns />
    </div>
  </div>
  )
}
