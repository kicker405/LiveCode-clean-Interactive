import { TCard } from "../components/card";

export type TCardStore = {
  cards: TCard[];
  eventName: string | null;
  isCardError: string | null;
  isPlanReport: boolean;

  setIsPlanReport: (event: boolean) => void;
  setIsCardError: (newError: string | null) => void;
  setEventName: (newEventName: string | null) => void;
  setCards: (newCards: TCard[]) => void;
};