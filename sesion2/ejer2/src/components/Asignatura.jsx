import React from "react";
import Profesor from "./Profesor";
import Alumnos from "./Alumnos";

import "./Styles.css";

const Asignatura = props => {
  const { asignatura, profesor, alumnos, curso } = props.asignatura;
  const aprobado = props.aprobado;

  if (true) {
    return (
      <div className="Asignatura">
        <h1>{asignatura}</h1>
        <h2>Curso: {curso}</h2>
        <Profesor name={profesor}></Profesor>
        <Alumnos
          alumnos={alumnos}
          aprobado={aprobado}
        ></Alumnos>
      </div>
    );
  } else {
    return (
      <div className="Asignatura">
        <h1>{asignatura}</h1>
      </div>
    );
  }
};

export { Asignatura as default };
