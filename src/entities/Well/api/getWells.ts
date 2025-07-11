import { fetchData } from "../../../shared/api/fetchData";
import { getUrl } from "../../../shared/api/getUrl";

export async function getWellsBySiteId(siteId: string) {
  const url = getUrl("WELL", siteId);
  return fetchData(url);
}