import "../styles/Card.css";
import CardBtn from "../../../shared/ui/CardBtn/CardBtn";
import { cardStore } from "../../../shared/models/stores/cardStore";
import { ICardProps } from "../models/types/types";

export default function Card({ well, isSelected, onClick }: ICardProps) {
  const { setIsPlanReport } = cardStore();
  const cardBtns = ['БУР', 'ВМР','ОСВ']

  let date = ((well.spudDate) === null ? 'Неизвестна' : String(well.spudDate).slice(0, 10));
  
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-up">
        <p className="card__site">Куст: {well.siteName}</p>
        <h3 className="card__well">
          Скважина: {well.wellCommonName}
        </h3>
        <span className="card__wellType">{well.reason}</span>
        <span className="card__wellspudDate">
          Дата забуривания: {date}
        </span>
      </div>
      <div className="card-middle">
        {cardBtns.map((btn, index)  => (
          <CardBtn key={index} children={btn} />
        ))}
      </div>
      <div className="card-bottom">
        <button onClick={(e) => {setIsPlanReport(true); e.stopPropagation() }} className="card-bottom__btn btn">План</button>
        <button className="card-bottom__btn btn">Все отчёты</button>
      </div>
    </div>
  );
}
