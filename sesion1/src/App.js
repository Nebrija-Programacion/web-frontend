import React, { Component } from 'react';

import './App.css';
import Asignatura from './components/Asignatura';

class App extends Component {

  state = {
    data: [
      {
        asignatura: "Programacion I",
        profesor: "Alberto Valero",
        alumnos: [
          {
            nombre: "Marcos Alonso",
            nota: 7,
          },
          {
            nombre: "Maria Martin-Toledano",
            nota: 6,
          },
          {
            nombre: "Santiago Molpeceres",
            nota: 8,
          }
        ]
      },
      {
        asignatura: "Programacion II",
        profesor: "Alberto Valero",
        alumnos: [
          {
            nombre: "Esla Sutia",
            nota: 7,
          },
          {
            nombre: "Johny Melavo",
            nota: 6,
          },
          {
            nombre: "Xin Chan",
            nota: 8,
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <Asignatura 
          asignatura={this.state.data[0].asignatura}
          profesor={this.state.data[0].profesor}
          alu1={this.state.data[0].alumnos[0].nombre} 
          alu2={this.state.data[0].alumnos[1].nombre}
          alu3={this.state.data[0].alumnos[2].nombre}
          nota1={this.state.data[0].alumnos[0].nota}
          nota2={this.state.data[0].alumnos[1].nota}
          nota3={this.state.data[0].alumnos[2].nota}
        />
        <Asignatura 
          asignatura={this.state.data[1].asignatura}
          profesor={this.state.data[1].profesor} 
          alu1={this.state.data[1].alumnos[0].nombre} 
          alu2={this.state.data[1].alumnos[1].nombre}
          alu3={this.state.data[1].alumnos[2].nombre}
          nota1={this.state.data[1].alumnos[0].nota}
          nota2={this.state.data[1].alumnos[1].nota}
          nota3={this.state.data[1].alumnos[2].nota}
        />
      </div>
    );
  }
}

export default App;
