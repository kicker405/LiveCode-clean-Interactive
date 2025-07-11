import { useState, useEffect } from "react";
import { cardStore } from "../../../shared/models/stores/cardStore";
import { getAllData } from "../../../shared/api/getAllData";
import { mapWellsToCards } from "../lib/mapWellsToCards";
import { handleCardDataError } from "../lib/handleCardDataError";
import { TCard} from "./types/types"

export default function useCardData() {
  const { setCards, setIsCardError } = cardStore();
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    getAllData()
      .then(({ projects, sites, wells }) => {
        const cards: TCard[] = mapWellsToCards(wells, sites, projects);
        setCards(cards);
      })
      .catch((err) => handleCardDataError(err, setIsCardError));
  }, []);

  return { selected, setSelected };
}
