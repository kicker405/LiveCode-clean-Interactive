import { useState } from "react";

type UseCalendarReturn = {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  generateDaysArray: () => { days: (number | null)[]; firstDayOfWeek: number };
};

export default function useCalendar(initialDate: Date = new Date()): UseCalendarReturn {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);

  const getFirstDayOfMonth = (date: Date): Date => {
    const cloneDate = new Date(date);
    cloneDate.setDate(1);
    return cloneDate;
  };

  const getDaysInMonth = (date: Date): number => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return new Date(nextMonth.getTime() - 1).getDate();
  };

  const getFirstDayOfWeek = (date: Date): number => {
    const firstDay = getFirstDayOfMonth(date);
    return firstDay.getDay();
  };

  const generateDaysArray = (): { days: (number | null)[]; firstDayOfWeek: number } => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfWeek = getFirstDayOfWeek(currentDate);
    const days: (number | null)[] = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return { days, firstDayOfWeek };
  };

  return {
    currentDate,
    setCurrentDate,
    generateDaysArray,
  };
}
