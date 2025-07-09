import { create } from "zustand";
import { TCardStore } from "../types/stores/cardStore";

export const cardStore = create<TCardStore>((set) => ({
  cards: [],
  eventName: null,
  isCardError: null,
  isPlanReport: false,

  setIsPlanReport: (event) => set({isPlanReport: event}),
  setIsCardError: (newError) => set({isCardError: newError}),
  setEventName: (newEventName) => set({eventName: newEventName}),
  setCards: (newCards) => set({cards: newCards})
}));
