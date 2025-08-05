import "./CardBtn.css";
import { cardStore } from "../../models";
import { IChildrenProps } from "../../models/types/common";

export function CardBtn({children}: IChildrenProps<string>) {
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