import './H2Component.css'
import { IChildrenProps } from "../../types/common";

export default function H2Component({children}: IChildrenProps) {
  return (
    <h2 className="h2">{children}</h2>
  )
}