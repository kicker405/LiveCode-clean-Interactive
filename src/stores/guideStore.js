import { create } from "zustand";

const guideStore = create((set) => ({
  learningIsStarted: false,
  canceledGuide: false,
  currentTooltipIndex: 0, 

  setLearningIsStarted: () => set({learningIsStarted: true}),
  setCanceledGuid: () => set({canceledGuide: true}),
  setCurrentTooltipIndex: (index) => set({currentTooltipIndex: index}),
}));

export default guideStore;
