import { create } from "zustand";

const guideStore = create((set) => ({
  canceledGuide: false,
  currentGuideWindow: 0, 

  setCanceledGuid: () => set({canceledGuide: true}),
  setCurrentGuideWindow: (index) => set({currentGuideWindow: index}),
}));

export default guideStore;
