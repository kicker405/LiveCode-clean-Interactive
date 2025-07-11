type TCard = {
  siteName?: string;
  wellCommonName: string;
  reason: string;
  spudDate: string;
  projectId?: string;
  wellId: string;
  projectName?: string;
};

export type TCardStore = {
  cards: TCard[];
  eventName: string | null;
  isCardError: string | null;
  isPlanReport: boolean;

  setIsPlanReport: (event: boolean) => void;
  setIsCardError: (newError: string | null) => void;
  setEventName: (newEventName: string | null) => void;
  setCards: (newCards: TCard[]) => void;
}