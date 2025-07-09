import "./TooltipBtns.css";
import { guideStore }from "../../../stores/guideStore";

export default function TooltipBtns() {
  const { currentTooltipIndex, setCurrentTooltipIndex, setCanceledGuid } = guideStore();
  
  return (
    <div className="tooltip__btns">
      <button onClick={() => setCanceledGuid()} className="tooltip__cancelBtn">
        Не показывать
      </button>
      <button onClick={() => setCurrentTooltipIndex(currentTooltipIndex + 1)} className="tooltip__confirmBtn">Далее</button>
    </div>
  );
}