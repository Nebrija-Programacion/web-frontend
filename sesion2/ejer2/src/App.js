import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./App.css";
import Header from "./components/Header"
import Contents from "./components/Contents";
import Asignaturas from "./data/data";

class App extends Component {
  state = {
    curso: 0,
    aprobado: 0,
    asignaturas: [...Asignaturas]
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
