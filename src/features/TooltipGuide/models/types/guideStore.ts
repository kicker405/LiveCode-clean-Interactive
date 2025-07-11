export type TGuideStore = {
  learningIsStarted: boolean;
  canceledGuide: boolean;
  currentTooltipIndex: number;

  setLearningIsStarted: () => void;
  setCanceledGuid: () => void;
  setCurrentTooltipIndex: (index: number) => void;
}