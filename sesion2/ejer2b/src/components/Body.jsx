import React from "react";
import Asignatura from "./Asignatura"

const Body = (props) => {
    const asignaturas = props.data.asignaturas;
    const filtered = props.data.curso === 0 ? 
        asignaturas :
        asignaturas.filter( asig => props.data.curso === asig.curso);
    
    console.log(filtered);
    return (
        <div>
            {
                filtered.map(obj => <Asignatura asignatura={obj} key={obj.id}/>)
            }       
        </div>
    )
}

export {Body as default}