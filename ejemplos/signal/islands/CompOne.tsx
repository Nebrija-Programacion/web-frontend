import { FunctionComponent } from "preact";
import { page, search } from "../signals.ts";
import { useState } from "preact/hooks";

const CompOne: FunctionComponent = () => {

  const [temp_search, setTempSearch] = useState<string>("")

  return(
    <div>
      <input type="text" onInput={(e) => setTempSearch(e.currentTarget.value)}/>
      <button type="button" onClick={() => {search.value = temp_search; page.value = 1}}>Buscar</button>
    </div>
  )
}

export default CompOne;