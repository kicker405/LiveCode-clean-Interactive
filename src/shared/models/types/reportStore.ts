export type TReport = {
    entityType: string;
    dateReport: string;
    reportNo: number;
    description: string;
    eventCode: string;
    reportAlias: string;
}

export type TReportStore = {
  reports: TReport[];
  isReportError: string;

  setIsReportError: (newError: string) => void;
  setReports: (newReports: TReport[]) => void;
  addReport: (report: TReport) => void;
}