import { FunctionComponent } from "preact";
import { page } from "../signals.ts";


const CompThree: FunctionComponent = () => {

  const pgUp = () => {
    if (page.value < 42)
      page.value = page.value + 1
    
  }
  const pgDn = () => {
    if (page.value > 0)
      page.value = page.value - 1
  }
  
  return(
    <div>
      <button type="button" onClick={pgDn}>Previous</button>
      <button type="button" onClick={pgUp}>Next</button>
    </div>
  )
}

export default CompThree;