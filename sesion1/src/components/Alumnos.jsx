import React from 'react';
import "./Styles.css"

const Alumnos = (props) => {
    return (
        <div className="Alumnos">
            {props.alu1} - {props.nota1}<br/>
            {props.alu2} - {props.nota2}<br/>
            {props.alu3} - {props.nota3}<br/>
        </div>
    );
}

export {Alumnos as default}