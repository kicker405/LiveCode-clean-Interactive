export type TUseCalendar = {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  generateDaysArray: () => { days: (number | null)[]; firstDayOfWeek: number };
};