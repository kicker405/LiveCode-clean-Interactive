import './FilterBtn.css'
import { useState } from "react";

export default function FilterBtn({ children, onClick }) {
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
