import "./WindowBtns.css";
import guideStore from "../../../stores/guideStore";

export default function WindowBtns() {
  const { currentGuideWindow, setCurrentGuideWindow, setCanceledGuid } = guideStore();
  return (
    <div className="window__btns">
      <button onClick={() => setCanceledGuid()} className="window__cancelBtn">
        Не показывать
      </button>
      <button onClick={() => setCurrentGuideWindow(currentGuideWindow + 1)} className="window__confirmBtn">Далее</button>
    </div>
  );
}
