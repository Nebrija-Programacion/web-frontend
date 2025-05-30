import { FunctionalComponent } from "preact";
import { mySignal } from "../signals.ts";

const IslandOne: FunctionalComponent = () => {
  return (
    <div>{mySignal.value}</div>
  )
}

export default IslandOne;