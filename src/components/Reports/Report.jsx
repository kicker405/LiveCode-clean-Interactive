import "./Report.css";
import ReportsTable from "../ReportsTable/ReportsTable";
import H2Component from "../H2Component/H2Component";
import FilterBtn from "../FilterBtn/FilterBtn";
import { useState } from "react";

export default function Report() {
  const filterOptions = [
    { value: "DDR", label: "Суточный" },
    { value: "GEN_PLAN", label: "Планирование" },
    { value: "CASING", label: "Крепление" },
    { value: "GEN_CMT", label: "Цементирование" },
  ];
  let [filters, setFilters] = useState([])

  const handleFilterClick = (filterValue) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filterValue)) {
        return prevFilters.filter((f) => f !== filterValue);
      }
      return [...prevFilters, filterValue];
    });
  };
  
  return (
    <div className="reports">
      <div className="reports__filters filters">
        <H2Component >Отчёты</H2Component>
        <ul className="filters__list">
          {filterOptions.map(({ value, label }) => (
            <li key={value} className="filters__list-item">
              <FilterBtn onClick={() => handleFilterClick(value)}>
                { label }
              </FilterBtn>
            </li>
          ))}
        </ul>
      </div>
      <div className="reports__table">
        <ReportsTable tableFilters = {filters}/>
      </div>
    </div>
  );
}
