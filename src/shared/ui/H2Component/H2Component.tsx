import './H2Component.css'
import { IChildrenProps } from '../../models/types/common'

export function H2Component({children}: IChildrenProps) {
  return (
    <h2 className="h2">{children}</h2>
  )
}