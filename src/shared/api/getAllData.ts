import { getProjects } from "../../entities/Project/api/getProject";
import { getSitesByProjectId } from "../../entities/Site/api/getSites";
import { getWellsBySiteId} from "../../entities/Well/api/getWells";
import { IProject } from "../models";
import { IGetAllData } from "../models/types/getAllData";

export async function getAllData():Promise<IGetAllData> {
  const projects:IProject[] = await getProjects();
  if (!projects) return { projects: [], sites: [], wells: [] };

  const sites = (await Promise.all(
    projects.map((project:IProject) =>
      getSitesByProjectId(project.projectId)
    )
  )).flat();

  const wells = (await Promise.all(
    sites.map((site: any) => getWellsBySiteId(site.siteId))
  )).flat();

  return { projects, sites, wells };
}
