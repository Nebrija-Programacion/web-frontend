import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./App.css";
import Header from "./components/Header"
import Contents from "./components/Contents";

class App extends Component {
  state = {
    curso: 0,
    aprobado: 0,
    asignaturas:
    [
      {
        asignatura: "Programacion I",
        id: 1,
        curso: 1,
        profesor: "Alberto Valero",
        alumnos: [
          {
            id: 1,
            nombre: "Marcos Alonso",
            nota: 7
          },
          {
            id: 2,
            nombre: "Luis Rodri",
            nota: 4
          },
          {
            id: 3,
            nombre: "Mariana Simbiotica",
            nota: 6
          }
        ]
      },
      {
        asignatura: "Estructura de Datos",
        id: 2,
        curso: 1,
        profesor: "Jose Emilio Torres",
        alumnos: [
          {
            id: 1,
            nombre: "Marcos Alonso",
            nota: 2
          },
          {
            id: 2,
            nombre: "Luis Rodri",
            nota: 4
          },
          {
            id: 3,
            nombre: "Mariana Simbiotica",
            nota: 6
          }
        ]
      },
      {
        asignatura: "Java",
        id: 3,
        curso: 2,
        profesor: "Jorge Castellanos",
        alumnos: [
          {
            id: 4,
            nombre: "Agustina Agatiello",
            nota: 9
          },
          {
            id: 5,
            nombre: "Alberto Obo",
            nota: 4
          },
          {
            id: 6,
            nombre: "Simon Perico",
            nota: 6
          }
        ]
      },
      {
        asignatura: "Backend",
        id: 4,
        curso: 3,
        profesor: "Alberto Otravez",
        alumnos: [
          {
            id: 7,
            nombre: "Mateo",
            nota: 9
          },
          {
            id: 8,
            nombre: "Luis Tengounaduda",
            nota: 10
          },
          {
            id: 9,
            nombre: "Estefaniaaaa",
            nota: 6
          }
        ]
      }
    ]
  }

  asignaturaOnClickHandler = asignaturaName => {
    const data = cloneDeep(this.state.data);
    const asignatura = data.find(asig => asig.asignatura === asignaturaName);

    if (asignatura) {
      asignatura.visible = !asignatura.visible;
    }

    this.setState({ data });
  };

  cursoOnClickHandler = curso => {
    this.setState({ curso });
  }

  aprobadoOnClickHandler = aprobado => {
    this.setState({aprobado});
    console.log(aprobado);
  }


  render() {
    return (
      <div>
        <Header 
          cursoOnClick = {this.cursoOnClickHandler} 
          aprobadoOnClick = {this.aprobadoOnClickHandler}
        />
        <Contents 
          asignaturas = {this.state.asignaturas} 
          aprobado = {this.state.aprobado} 
          curso = {this.state.curso} 
        />
      </div>
    );
  }
}

export default App;
