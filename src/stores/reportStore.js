import {create} from 'zustand';

const reportStore = create((set) => ({
    reports: [],
    isReportError: null,

    setIsReportError: (newError) => set({isReportError: newError}),
    setReports: (newReports) => set({reports: newReports}),
    addReport: (report) => set((state) => ({
        reports: [...state.reports, report]
    })),
}))

export default reportStore;