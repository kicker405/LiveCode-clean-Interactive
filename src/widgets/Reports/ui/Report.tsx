import "../styles/Report.css";
import ReportsTable from "../../../entities/ReportsTable/ui/ReportsTable";
import H2Component from "../../../shared/ui/H2Component/H2Component";
import FilterBtn from "../../../shared/ui/FilterBtn/ui/FilterBtn";
import { useState } from "react";

export default function Report() {
  const filterOptions = [
    { value: "DDR", label: "Суточный" },
    { value: "GEN_PLAN", label: "Планирование" },
    { value: "CASING", label: "Крепление" },
    { value: "GEN_CMT", label: "Цементирование" },
  ];

  let [filters, setFilters] = useState<string[]>([])

  const handleFilterClick = (filterValue:string) => {
    setFilters((prevFilters:string[]) => {
      if (prevFilters.includes(filterValue)) {
        return prevFilters.filter((f) => f !== filterValue);
      }
      return [...prevFilters, filterValue];
    });
  };
  
  return (
    <div className="reports">
      <div id="reportFiltersId" className="reports__filters filters">
        <div className="reports__h2">
          <H2Component >Отчёты</H2Component>
        </div>
        
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
        <ReportsTable children = {filters}/>
      </div>
    </div>
  );
}
