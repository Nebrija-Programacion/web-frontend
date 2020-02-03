import React from "react";
import "./Styles.css";

const Alumnos = props => {
  const asignatura = props.asignatura;
  const alumnoOnClick = props.alumnoOnClick;

  return (
    <div className="Alumnos">
      {props.alumnos.map(alumno => (
        <div className="Alumno"
          key={alumno.nombre}
          onClick={() => alumnoOnClick(alumno.nombre, asignatura)}
        >
          <div className="AlumnoData">{alumno.nombre}</div>
          <div className="AlumnoData">{alumno.visible ? alumno.nota : null}</div>
        </div>
      ))}
    </div>
  );
};

export { Alumnos as default };
