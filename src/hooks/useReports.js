import { useEffect } from "react";
import { getReports, getPlanReports } from "../components/api/api";
import reportStore from "../stores/reportStore";
import cardStore from "../stores/cardStore";

export default function useReports(selected) {
  const { setReports, setIsReportError } = reportStore();
  const { isPlanReport } = cardStore();

  async function tryCatchError(func) {
    try {
      return await func();
    } catch (error) {
      setIsReportError(
        `Ошибка при формировании данных карточек: ${error}`
      );
    }
  }

  useEffect(() => {
    async function fetchReports() {
      if (!selected) return;
      const data = isPlanReport ? await getPlanReports(selected) : await getReports(selected);
      setReports(data);
    }
    tryCatchError(async() => fetchReports());
  }, [selected, isPlanReport]);

  useEffect(() => {
    async function loadDefaultReport() {
      const defaultIndex = "636Znb6AdT";
      const data = await getReports(defaultIndex);
      setReports(data);
      
    }
    tryCatchError(async() => loadDefaultReport());
  }, []);
}
