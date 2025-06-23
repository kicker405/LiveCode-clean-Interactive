import "./CardBtn.css";
import cardStore from "../../stores/cardStore";

export default function CardBtn({child}) {
    const setEventName = cardStore((state) => state.setEventName) 

    return (
        <button  onClick={(e) => {
          setEventName(child)
          e.stopPropagation()
        } } className="card__btn btn">
            {child}
        </button>
    )
}