import { MaterialReactTable } from "material-react-table";
import reportStore from "../../stores/reportStore";
import cardStore from "../../stores/cardStore";

export default function ReportsTable({ tableFilters }) {
  const reports = reportStore((state) => state.reports);
  const eventName = cardStore((state) => state.eventName);
  let data = [];
  const columns = [
    {
      accessorKey: "type",
      header: "Тип",
    },
    {
      accessorKey: "date",
      header: "Дата",
      sortingFn: "datetime",
    },
    {
      accessorKey: "number",
      header: "№",
    },
    {
      accessorKey: "description",
      header: "Описание",
    },
    {
      accessorKey: "event",
      header: "Мероприятие",
    },
  ];

  function tryCatchError(func) {
    try {
      return func();
    } catch (error) {
      console.log(error);
    }
  }

  function getReports() {
    if (reports.length !== 0) {
      reports.forEach((report) => {
        report = {
          type: report.entityType,
          date: report.dateReport,
          number: report.reportNo,
          description: report.description,
          event: report.eventCode,
          reportAlias: report.reportAlias,
        };
        data.push(report);
      })
    }
  }
  
  function filterTableByEventName() {
    if (eventName !== null) {
      data = data.filter((item) => item.event === eventName);
    }
    if (tableFilters.length > 0) {
      data = data.filter((item) => tableFilters.includes(item.reportAlias));
    }
  }

  tryCatchError(() => getReports());
  filterTableByEventName()

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        initialState={{
          sorting: [{ id: "date", desc: true }],
        }}
        enableTopToolbar={false}
      />
    </div>
  );
}
