import { useEffect } from "react";
import { tryCatchError } from "../utils/tryCatchError";
import { getReports, getPlanReports } from "../api/api";
import { reportStore } from "../stores/reportStore";
import { cardStore } from "../stores/cardStore";
import { TReport } from '../types/components/report'

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
