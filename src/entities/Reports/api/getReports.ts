import { fetchData } from "../../../shared/api/fetchData";
import { getUrl } from "../../../shared/api/getUrl";
import { BASE_URL,ENTITY,FIELDS } from "../../../shared/constants/api";

export async function getReports(wellId: string) {
  const url = getUrl("REPORT", wellId);
  return fetchData(url);
}

export async function getPlanReports(wellId: string) {
  const url = `${BASE_URL}/${ENTITY.REPORT}/${wellId}/reportAlias/GEN_PLAN/?fields=${FIELDS.REPORT}`;
  return fetchData(url);
}