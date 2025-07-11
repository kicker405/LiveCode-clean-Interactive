import { fetchData } from "../../../shared/api/fetchData";
import { getUrl } from "../../../shared/api/getUrl";

export async function getProjects() {
  const url = getUrl("PROJECT", "");
  return fetchData(url);
}