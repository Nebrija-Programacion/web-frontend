import { useEffect } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { mySignal } from "../signals.ts";

const IslandThree:FunctionalComponent = () => {
  useEffect(() => console.log("Has cambiado la señal"), [mySignal.value]);
  return <div>Soy el tres</div>
}

export default IslandThree;