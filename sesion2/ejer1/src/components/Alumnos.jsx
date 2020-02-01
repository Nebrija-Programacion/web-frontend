import React from "react";
import "./Styles.css";

const Alumnos = props => {
  const alu1 = props.alumnos[0].nombre;
  const alu2 = props.alumnos[1].nombre;
  const alu3 = props.alumnos[2].nombre;

  const nota1 = props.alumnos[0].nota;
  const nota2 = props.alumnos[1].nota;
  const nota3 = props.alumnos[2].nota;

  const nota1Enabled = props.alumnos[0].visible;
  const nota2Enabled = props.alumnos[1].visible;
  const nota3Enabled = props.alumnos[2].visible;

  const asignatura = props.asignatura;
  const alumnoOnClick = props.alumnoOnClick;

  return (
    <div className="Alumnos">
      {props.alumnos.map(alumno => (
        <span
          key={alumno.name}
          onClick={() => alumnoOnClick(alumno.name, asignatura)}
        >
          {alumno.name} - {alumno.visible ? alumno.nota : null}
          <br />
        </span>
      ))}
    </div>
  );
};

export { Alumnos as default };
