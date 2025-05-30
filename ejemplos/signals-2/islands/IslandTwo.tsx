import { FunctionComponent } from "preact";
import { mySignal } from "../signals.ts";

const IslandTwo: FunctionComponent = () => {
  return(
    <input type="text" onInput={(e) => mySignal.value = e.currentTarget.value}/>
  )
}

export default IslandTwo;