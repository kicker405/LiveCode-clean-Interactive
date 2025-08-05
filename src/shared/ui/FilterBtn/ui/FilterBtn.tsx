import '../styles/FilterBtn.css'
import { useState } from "react";
import { TFilterBtnProps } from '../model/types';

export function FilterBtn({ children, onClick }: TFilterBtnProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick(children); 
  };

  return (
    <button onClick={handleClick} className={`filtr__btn ${isActive ? 'active' : ''}`}>
      {children}
    </button>
  );
}
