import "./GuideBeginning.css";
import useGuideBeginning from "../../lib/hooks/useGuideBeginning";

export function GuideBeginning() {
  const { isVisible, startGuide, finishGuide } = useGuideBeginning();

  return isVisible ? (
    <div className="guide">
      <div className="guide__box">
        <h3 className="guide__h3">Добро пожаловать!</h3>
        <p className="guide__text">Хотите начать обучение или скрыть это уведомление?</p>
        <div className="guide__btns">
          <button onClick={startGuide} className="start-learning-btn">
            Начать обучение
          </button>
          <button onClick={finishGuide} className="hide-learnig-btn">
            Не показывать
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
