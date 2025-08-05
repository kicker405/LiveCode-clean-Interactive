import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { reportStore } from "../../../shared/models/stores/reportStore";
import { cardStore } from "../../../shared/models/stores/cardStore";
import { IChildrenProps } from "../../../shared/models/types/common";
import { TReport } from "../model/types";

export function ReportsTable({ children }: IChildrenProps<string[]>) {
  const reports = reportStore((state) => state.reports);
  const eventName = cardStore((state) => state.eventName);
  const tableFilters = children;

  // Подготовка данных — безопасная и мемоизированная
  const data: TReport[] = useMemo(() => {
    try {
      let transformed: TReport[] = reports.map((i: TReport) => ({
        entityType: i.entityType,
        dateReport: i.dateReport,
        reportNo: i.reportNo,
        description: i.description,
        eventCode: i.eventCode,
        reportAlias: i.reportAlias,
      }));

      if (eventName) {
        transformed = transformed.filter((item) => item.entityType === eventName);
      }

      if (tableFilters.length > 0) {
        transformed = transformed.filter((item) =>
          tableFilters.includes(item.reportAlias)
        );
      }

      return transformed;
    } catch (error) {
      console.error("Ошибка при обработке отчетов:", error);
      return [];
    }
  }, [reports, eventName, tableFilters]);

  const columns = useMemo<MRT_ColumnDef<TReport>[]>(
    () => [
      { accessorKey: "entityType", header: "Тип" },
      { accessorKey: "dateReport", header: "Дата", sortingFn: "datetime" },
      { accessorKey: "reportNo", header: "№" },
      { accessorKey: "description", header: "Описание" },
      { accessorKey: "eventCode", header: "Мероприятие" },
    ],
    []
  );

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        initialState={{
          sorting: [{ id: "dateReport", desc: true }],
        }}
        enableTopToolbar={false}
      />
    </div>
  );
}
