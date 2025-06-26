import { useState, useEffect } from "react";
import guideStore from '../stores/guideStore'

export default function useGuideBeginning() {
  const {setLearningIsStarted, setCanceledGuid} = guideStore();
  const [isVisible, setIsVisible] = useState(true);

  const hideGuide = () => {
    setIsVisible(false);
    localStorage.setItem("guideHidden", "true");
  };

    const startGuide = () => {
    setLearningIsStarted();
    hideGuide();
  };

  const finishGuide = () => {
    setCanceledGuid();
    hideGuide();
  };

  useEffect(() => {
    const isGuideHidden = localStorage.getItem("guideHidden");
    if (isGuideHidden === "true") {
      setIsVisible(false);
    }
  }, []);

  return {
    isVisible,
    startGuide,
    finishGuide,
  }
}
