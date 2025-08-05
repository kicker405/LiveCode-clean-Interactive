import { useState, useEffect } from "react";
import { guideStore } from "../../models/stores/guideStore";
import { IGuideBeginningHook } from "../../models/types/hooksTypes";


export default function useGuideBeginning(): IGuideBeginningHook {
  const {setLearningIsStarted, setCanceledGuid} = guideStore();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hideGuide = ():void => {
    setIsVisible(false);
    localStorage.setItem("guideHidden", "true");
  };

    const startGuide = (): void => {
    setLearningIsStarted();
    hideGuide();
  };

  const finishGuide = (): void => {
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
