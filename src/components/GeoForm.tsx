import { Circle } from "./Circle"
import { Square } from "./Square"

export const GeoForm = () => {
  return (<div className="flex border-2 border-white p-3 items-center gap-3">
    <Square/>
    <Circle/>
  </div>
  )
}