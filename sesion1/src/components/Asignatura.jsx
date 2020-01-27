import React from 'react';
import Profesor from './Profesor';
import Alumnos from './Alumnos';

import "./Styles.css"

const Asignatura = (props) => {
    return(
        <div className="Asignatura">
            <div>
                <h1>{props.asignatura}</h1>
            </div>
            <Profesor name = {props.profesor}></Profesor>
            <Alumnos
                alu1 = {props.alu1}
                alu2 = {props.alu2}
                alu3 = {props.alu3}
                nota1 = {props.nota1}
                nota2 = {props.nota2}
                nota3 = {props.nota3}
            >
            </Alumnos>
        </div>
    );
}

export {Asignatura as default}