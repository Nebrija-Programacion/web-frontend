import React from "react";
import "./Styles.css";

const Alumnos = props => {
  

  const filtered = props.aprobado === 0 ?
    props.alumnos :
    props.alumnos.filter( obj => {
      if (props.aprobado === 1) return obj.nota >= 5;
      else if (props.aprobado === 2) return obj.nota < 5;
    });

  return (
    <div className="Alumnos">
      {filtered.map(alumno => (
        <div className="Alumno" key={alumno.id}>
          <div className="AlumnoData">{alumno.nombre}</div>
          <div className="AlumnoData">{alumno.nota}</div>
        </div>
      ))}
    </div>
  );
};

export { Alumnos as default };
