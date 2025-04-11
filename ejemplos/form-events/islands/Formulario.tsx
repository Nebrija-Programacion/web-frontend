import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

const Formulario: FunctionalComponent = () => {

    const [input, setInput] = useState<string>("");

   const handleClick = (e: Event) => {
        
   }
   
   return (<div>
        <input type="text" name="telefono" placeholder="Telefono" value={input} onInput={(e)=>{
            const newValue = e.currentTarget.value;
            setInput(newValue);
        }} />
        <button type="button" onClick={handleClick}>Enviar</button>
        <div>{input}</div>
    </div>)
}

export default Formulario;