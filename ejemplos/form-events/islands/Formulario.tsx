import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

const Formulario: FunctionalComponent = () => {

    const [telefono, setTelefono] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

   const handleClick = (e: Event) => {
    if(telefono.length!==9){
        setError(true);
   }}
   
   return (<div>
        <input type="text" name="telefono" placeholder="Telefono" value={telefono} 
        onInput={(e)=>{
            setError(false);
            const newValue = e.currentTarget.value;
            setTelefono(newValue);
        }} />
        <button type="button" onClick={handleClick}>Enviar</button>
        {error && <div>El numero debe tener 9 digitos. Tinee {telefono.length}</div>}
    </div>)
}

export default Formulario;