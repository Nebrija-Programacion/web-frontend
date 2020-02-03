import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./App.css";
import Header from "./components/Header"
import Asignatura from "./components/Asignatura";

class App extends Component {
  state = {
    data: [
      {
        visible: true,
        asignatura: "Programacion I",
        profesor: "Alberto Valero",
        alumnos: [
          {
            visible: true,
            nombre: "Marcos Alonso",
            nota: 7
          },
          {
            visible: true,
            nombre: "Maria Martin-Toledano",
            nota: 6
          },
          {
            visible: true,
            nombre: "Santiago Molpeceres",
            nota: 8
          }
        ]
      },
      {
        visible: true,
        asignatura: "Programacion II",
        profesor: "Alberto Valero",
        alumnos: [
          {
            visible: true,
            nombre: "Esla Sutia",
            nota: 7
          },
          {
            visible: true,
            nombre: "Johny Melavo",
            nota: 6
          },
          {
            visible: true,
            nombre: "Xin Chan",
            nota: 8
          }
        ]
      }
    ]
  };

  asignaturaOnClickHandler = asignaturaName => {
    const data = cloneDeep(this.state.data);
    const asignatura = data.find(asig => asig.asignatura === asignaturaName);

    if (asignatura) {
      asignatura.visible = !asignatura.visible;
    }

    this.setState({ data });
  };

  alumnoOnClickHandler = (alumnoName, asignaturaName) => {
    const data = cloneDeep(this.state.data);
    const asignatura = data.find(asig => asig.asignatura === asignaturaName);

    if (asignatura) {
      const alumno = asignatura.alumnos.find(alu => alu.nombre === alumnoName);
      if (alumno) alumno.visible = !alumno.visible;
    }

    this.setState({ data });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.data.map(obj => (
          <Asignatura
            key={obj.asignatura}
            asignatura={obj}
            asignaturaOnClick={this.asignaturaOnClickHandler}
            alumnoOnClick={this.alumnoOnClickHandler}
          />
        ))}
      </div>
    );
  }
}

export default App;
