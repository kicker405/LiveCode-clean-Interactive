import "./CardBtn.css";
import { cardStore } from "../../models/stores/cardStore";
import { IChildrenProps } from "../../models/types/common";

export default function CardBtn({children}: IChildrenProps<string>) {
    const setEventName = cardStore((state) => state.setEventName) 

    return (
        <button  onClick={(e) => {
          setEventName(children)
          e.stopPropagation()
        } } className="card__btn btn">
            {children}
        </button>
    )
}