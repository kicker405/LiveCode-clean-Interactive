import { TReport } from "../components/report";

export type TReportStore = {
  reports: TReport[];
  isReportError: string | null;
  setIsReportError: (newError: string) => void;
  setReports: (newReports: TReport[]) => void;
  addReport: (report: TReport) => void;
};