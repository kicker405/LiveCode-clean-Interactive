import { TCard } from "../models/types/types";
import { IProject, ISite, IWell } from '../../../shared/models'

export function mapWellsToCards(wells: IWell[], sites: ISite[], projects: IProject[]): TCard[] {
  return wells.map((well) => {
    const site = sites.find((s) => s.siteId === well.siteId);
    const project = site && projects.find((p) => p.projectId === site.projectId);

    return {
      siteName: site?.siteName,
      wellCommonName: well.wellCommonName,
      reason: well.reason,
      spudDate: well.spudDate,
      projectId: site?.projectId,
      wellId: well.wellId,
      projectName: project?.projectName,
    };
  });
}
