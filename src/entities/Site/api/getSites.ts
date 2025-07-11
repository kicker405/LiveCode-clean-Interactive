import { fetchData } from "../../../shared/api/fetchData";
import { getUrl } from "../../../shared/api/getUrl";

export async function getSitesByProjectId(projectId: string) {
  const url = getUrl("SITE", projectId);
  return  fetchData(url);
}