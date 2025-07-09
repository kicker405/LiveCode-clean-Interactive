import {create} from 'zustand';
import { TReportStore } from '../types/stores/reportStore';

export const reportStore = create<TReportStore>((set) => ({
  reports: [],
  isReportError: null,

  setIsReportError: (newError) => set({ isReportError: newError }),
  setReports: (newReports) => set({ reports: newReports }),
  addReport: (report) =>
    set((state) => ({
      reports: [...state.reports, report],
    })),
}));
