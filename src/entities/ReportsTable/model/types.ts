export type TReport = {
    entityType: string;
    dateReport: string;
    reportNo: number;
    description: string;
    eventCode: string;
    reportAlias: string;
}

export interface IReportColumns {
  accessorKey: string;
  header: any;
  sortingFn?: string;
}