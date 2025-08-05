import { Card } from '../../../entities/Card'
import { Calendar, Slider } from "../../../shared/ui";
import { useNavigate } from "react-router";
import { cardStore } from "../../../shared/models";
import { TWellBoardProps } from "../models/types";


export function WellBoard({selected, setSelected}:TWellBoardProps) {
  const { cards, setEventName, setIsPlanReport } = cardStore();
  const navigate = useNavigate();

  if (cards.length === 0) {
    return <p>Данные загружаются...</p>;
  }

  const setOnClick = (wellId:string) => {
    setEventName(null);
    setIsPlanReport(false);
    setSelected(wellId); 
    navigate(`/cards/${wellId}`);
  }

  return (
    <div className="card-list">
      <Slider>
        <div className="cards-track">
          {cards.map((well) => (
            <Card
              key={well.wellId}
              well={well}
              isSelected={selected === well.wellId}
              onClick={(e) => {
                e.preventDefault()
                setOnClick(well.wellId)
              }}
            />
          ))}
        </div>
      </Slider>
      <Calendar />
    </div>
  );
}
