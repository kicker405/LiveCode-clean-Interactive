import {create} from 'zustand';
import { TReportStore } from '../types/reportStore';

export const reportStore = create<TReportStore>((set) => ({
  reports: [],
  isReportError: "",

  setIsReportError: (newError) => set({ isReportError: newError }),
  setReports: (newReports) => set({ reports: newReports }),
  addReport: (report) =>
    set((state) => ({
      reports: [...state.reports, report],
    })),
}));
