import { useState } from "react";

export default function useCalendar(initialDate = new Date()) {
  const [currentDate, setCurrentDate] = useState(initialDate);

  const getFirstDayOfMonth = (date) => {
    const cloneDate = new Date(date);
    cloneDate.setDate(1);
    return cloneDate;
  };

  const getDaysInMonth = (date) => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return new Date(nextMonth - 1).getDate();
  };

  const getFirstDayOfWeek = (date) => {
    const firstDay = getFirstDayOfMonth(date);
    return firstDay.getDay();
  };

  const generateDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfWeek = getFirstDayOfWeek(currentDate);
    const days = [];

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
