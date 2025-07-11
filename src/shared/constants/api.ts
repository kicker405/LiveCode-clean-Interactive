export const BASE_URL = "https://edmrest.dev.burworld.ru/Universal"; 

export const ENTITY = {
  PROJECT: 'CdProjectSource',
  SITE: 'CdSiteSource/projectId',
  WELL: 'CdWellSource/siteId',
  REPORT: 'DmReportJournal/wellId',
};

export const FIELDS = {
  PROJECT: 'projectName,projectId',
  SITE: 'projectId,siteId,siteName',
  WELL: 'siteId,wellCommonName,wellId,spudDate,reason',
  REPORT: 'eventCode,reportJournalId,wellId,wellboreId,dateReport,eventId,reportAlias,description,entityType,reportNo',
};