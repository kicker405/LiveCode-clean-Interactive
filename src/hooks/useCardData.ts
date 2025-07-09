import { useState, useEffect } from "react";
import { tryCatchError } from "../utils/tryCatchError";
import { getAllData } from "../api/api";
import { cardStore } from "../stores/cardStore";
import { TCard, IProject, ISite, IWell } from "../types/components/card";

export default function useCardData() {
  const {setCards, setIsCardError} = cardStore();
  const [selected, setSelected] = useState<string | null>(null);

  function createWellCard(well: IWell, site?: ISite, project?: IProject): TCard {
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
  tryCatchError<{ projects: IProject[]; sites: ISite[]; wells: IWell[]}>(
    async () => {
      const { projects, sites, wells } = await getAllData();

      const wellsCard: TCard[] = wells.map((well: IWell): TCard => {
        const site: ISite | undefined = sites.find((s: ISite) => s.siteId === well.siteId);
        const project: IProject | undefined = site && projects.find((p: IProject) => p.projectId === site.projectId);
        return createWellCard(well, site, project);
      });

      setCards(wellsCard);

      return { projects, sites, wells };
    },
    (error: unknown) => {
      const typedError = error as Error;
      setIsCardError(`Ошибка при формировании данных карточек: ${typedError.message}`);
    }
  );
}, []);

  return { selected, setSelected };
}
