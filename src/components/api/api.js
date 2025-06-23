const BASE_URL = "https://edmrest.dev.burworld.ru/Universal";

const ENTITY = {
  PROJECT: 'CdProjectSource',
  SITE: 'CdSiteSource/projectId',
  WELL: 'CdWellSource/siteId',
  REPORT: 'DmReportJournal/wellId',
}

const FIELDS = {
  PROJECT: 'projectName,projectId',
  SITE: 'projectId,siteId,siteName',
  WELL: 'siteId,wellCommonName,wellId,spudDate,reason',
  REPORT: 'eventCode,reportJournalId,wellId,wellboreId,dateReport,eventId,reportAlias,description,entityType,reportNo',
} 

const getUrl = (type, id) => {
  let url = `${BASE_URL}/${ENTITY[type]}/${id}/?fields=${FIELDS[type]}`;
  return url;
};

async function tryCatchError(asyncFunc) {
  try {
    return await asyncFunc();
  }catch (error) {
    console.error("Ошибка при получении данных:", error);
  }  
}

// Выполнение HTTP-запросов
export async function  fetchData(url) {
  const response = await tryCatchError(async () => fetch(url));
  const data = await response.json();
  return data;
}

// Получение данных о проектах
export async function getProjects() {
  const url = getUrl("PROJECT",'')
  return tryCatchError(async () => fetchData(url));
}

// Получение данных о кустах для конкретного проекта
export async function getSitesByProjectId(projectId) {
  const url = getUrl('SITE', projectId);
  return tryCatchError(async () => fetchData(url));
}

// Получение данных о скважинах для конкретного куста
export async function getWellsBySiteId(siteId) {
  const url = getUrl("WELL", siteId);
  return tryCatchError(async () => fetchData(url));
}

//получение всех отчетов по wellId
export async function getReports(index) {
  const url = getUrl("REPORT", index);
  return tryCatchError(async () => fetchData(url));
}

export async function getPlanReports(index) {
  return tryCatchError(async () => fetchData(`${BASE_URL}/${ENTITY.REPORT}/${index}/reportAlias/GEN_PLAN/?fields=${FIELDS.REPORT}`));
}

// Получение всех данных (проекты, площадки, скважины)
export async function getAllData() {
  const projects = await getProjects();

  const sitesPromises = projects.map((project) =>
    getSitesByProjectId(project.projectId)
  );
  const allSites = await Promise.all(sitesPromises);
  const sites = allSites.flat();
  
  const wellsPromises = sites.map((site) =>
    getWellsBySiteId(site.siteId)
  );
  const allWells = await Promise.all(wellsPromises);
  const wells = allWells.flat();
  return { projects, sites, wells };
}

