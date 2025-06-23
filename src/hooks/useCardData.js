import { useState, useEffect } from "react";
import { getAllData } from "../components/api/api";
import cardStore from "../stores/cardStore";

export default function useCardData() {
  const setCards = cardStore((state) => state.setCards);
  const setIsCardError = cardStore((state) => state.setIsCardError);
  const [selected, setSelected] = useState(null);

  async function tryCatchError(func) {
    try {
      return await func();
    } catch (error) {
      setIsCardError(
        `Ошибка при формировании данных карточек: ${error.message}`
      );
    }
  }
  function createWellCard(well, site, project) {
    return {
      siteName: site?.siteName,
      wellCommonName: well.wellCommonName,
      reason: well.reason,
      spudDate: well.spudDate,
      projectId: site?.projectId,
      wellId: well.wellId,
      projectName: project?.projectName,
    };
  }

  useEffect(() => {
    async function fillCardData() {
      const { projects, sites, wells } = await getAllData();
      
      const wellsCard = wells.map((well) => {
        const site = sites.find((s) => s.siteId === well.siteId);
        const project = site && projects.find((p) => p.projectId === site.projectId);
        return createWellCard(well, site, project)
      });

      setCards(wellsCard);
    }
    tryCatchError(async () => fillCardData());
  }, []);

  return { selected, setSelected };
}
