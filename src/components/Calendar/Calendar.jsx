import "./Calendar.css";
import useCalendar from '../../hooks/useCalendar';

export default function Calendar() {
  const weekdays = ["Вс", "Пон", "Вт", "Ср", "Чт", "Пт", "Суб"];
  const selectedDate = new Date().getDate()
  const { currentDate, setCurrentDate, generateDaysArray } = useCalendar();

  return (
    <div className="calendar">
      <div className="calendar__header">
        <span>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <div className="calendar-header_btns">
          <button
            onClick={() =>
              setCurrentDate((prevDate) => {
                const newDate = new Date(prevDate); 
                newDate.setMonth(newDate.getMonth() - 1);
                return newDate; 
              })
            }
          >
            ❮
          </button>
          <button
            onClick={() =>
              setCurrentDate((prevDate) => {
                const newDate = new Date(prevDate); 
                newDate.setMonth(newDate.getMonth() + 1); 
                return newDate; 
              })
            }
          >
            ❯
          </button>
        </div>
      </div>
      <div className="calendar__weekdays">
        {weekdays.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>

      <div className="calendar__days">
        {generateDaysArray().days.map((day, index) => (
          <span
            key={index}
            className="calendar__cell"
            style={{
              backgroundColor: selectedDate === day ? "rgb(45, 91, 155)" : "",
              color: selectedDate === day ? "white" : "",
            }}
          >
            {day || ""}
          </span>
        ))}
      </div>
    </div>
  );
}
