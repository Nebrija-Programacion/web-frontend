import React from "react";
import Profesor from "./Profesor";
import Alumnos from "./Alumnos";

import "./Styles.css";

const Asignatura = props => {
  const { asignatura, profesor, alumnos, visible } = props.asignatura;
  const { asignaturaOnClick, alumnoOnClick } = props;
  if (visible) {
    return (
      <div className="Asignatura">
        <h1 onClick={() => asignaturaOnClick(asignatura)}>{asignatura}</h1>
        <Profesor name={profesor}></Profesor>
        <Alumnos
          alumnos={alumnos}
          asignatura={asignatura}
          alumnoOnClick={alumnoOnClick}
        ></Alumnos>
      </div>
    );
  } else {
    return (
      <div className="Asignatura">
        <h1 onClick={() => asignaturaOnClick(asignatura)}>{asignatura}</h1>
      </div>
    );
  }
};

export { Asignatura as default };
