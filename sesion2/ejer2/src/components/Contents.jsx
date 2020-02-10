import React from "react";
import Asignatura from "./Asignatura"

import "./Styles.css";

const Contents = props => {
    const asignaturas = props.asignaturas;

    const filtered = (props.curso === 0) ? 
        asignaturas :  
        asignaturas.filter(obj => props.curso === obj. curso);
    
    console.log(`aprobado ${props.aprobado}`);
    return (
        <div className="Contents">{
            filtered.map(obj => (
                <Asignatura
                    aprobado={props.aprobado}
                    key={obj.id}
                    asignatura={obj}
                />
            ))
        }</div>
    );
}

export {Contents as default}