import { create } from "zustand";

const cardStore = create((set) => ({
  cards: [],
  eventName: null,
  isCardError: null,
  isPlanReport: false,

  setIsPlanReport: (event) => set({isPlanReport: event}),
  setIsCardError: (newError) => set({isCardError: newError}),
  setEventName: (newEventName) => set({eventName: newEventName}),
  setCards: (newCards) => set({cards: newCards}),
  addCard: (card) =>
    set((state) => ({
      cards: state.cards.some((c) => c.id === card.id)
        ? state.cards
        : [...state.cards, card],
    })),
}));

export default cardStore;
