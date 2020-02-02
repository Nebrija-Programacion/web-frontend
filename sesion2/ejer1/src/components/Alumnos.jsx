import React from "react";
import "./Styles.css";

const Alumnos = props => {
  const asignatura = props.asignatura;
  const alumnoOnClick = props.alumnoOnClick;

  return (
    <div className="Alumnos">
      {props.alumnos.map(alumno => (
        <span
          key={alumno.nombre}
          onClick={() => alumnoOnClick(alumno.nombre, asignatura)}
        >
          {alumno.nombre} - {alumno.visible ? alumno.nota : null}
          <br />
        </span>
      ))}
    </div>
  );
};

export { Alumnos as default };
