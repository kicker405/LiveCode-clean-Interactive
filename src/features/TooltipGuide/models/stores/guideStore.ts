import { create } from "zustand";
import { TGuideStore } from '../types/guideStore'

export const guideStore = create<TGuideStore>((set) => ({
  learningIsStarted: false,
  canceledGuide: false,
  currentTooltipIndex: 0, 

  setLearningIsStarted: () => set({learningIsStarted: true}),
  setCanceledGuid: () => set({canceledGuide: true}),
  setCurrentTooltipIndex: (index: number) => set({currentTooltipIndex: index}),
}));
