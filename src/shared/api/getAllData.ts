import { getProjects } from "../../entities/Project/api/getProject";
import { getSitesByProjectId } from "../../entities/Site/api/getSites";
import { getWellsBySiteId} from "../../entities/Well/api/getWells";

export async function getAllData() {
  const projects = await getProjects();
  if (!projects) return { projects: [], sites: [], wells: [] };

  const sites = (await Promise.all(
    projects.map((project: any) =>
      getSitesByProjectId(project.projectId)
    )
  )).flat();

  const wells = (await Promise.all(
    sites.map((site: any) => getWellsBySiteId(site.siteId))
  )).flat();

  return { projects, sites, wells };
}
