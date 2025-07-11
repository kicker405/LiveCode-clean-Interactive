import { useEffect } from "react";
import { tryCatchError } from "./lib/tryCatchError";
import { getReports, getPlanReports } from '../../../entities/Reports/api/getReports'
import { reportStore } from "../../../shared/models/stores/reportStore";
import { cardStore } from "../../../shared/models/stores/cardStore";
import { TReport } from "../../../entities/ReportsTable/model/types";

export default function useReports(selected: string | null) {
  const { setReports, setIsReportError } = reportStore();
  const { isPlanReport } = cardStore();

  useEffect(() => {
    tryCatchError<void>(
      async () => {
        if (!selected) return;
        const data: TReport[] = isPlanReport? await getPlanReports(selected): await getReports(selected);
        setReports(data);
      },
      (error: unknown) => {
        const typedError = error as Error;
        setIsReportError(`Ошибка при формировании данных карточек: ${typedError.message}`);
      }
    );
  }, [selected, isPlanReport]);

  useEffect(() => {
    tryCatchError<TReport[]>(
      async () => {
        const defaultIndex = "636Znb6AdT";
        const data: TReport[] = await getReports(defaultIndex);
        setReports(data);
        return data;
      },
      (error: unknown) => {
        const typedError = error as Error;
        setIsReportError(`Ошибка при формировании данных карточек: ${typedError.message}`);
      }
    );
  }, []);
}
