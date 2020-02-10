import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"

import Asignaturas from "./assets/data";

class App extends Component {

  state = {
    asignaturas: [...Asignaturas],
    curso: 0, 
    nota: 0,
  };

  onCursoClickHandler = (curso) => {
    this.setState({curso});
  }

  onNotaClickHandler(nota){
    this.setState({nota});
  }

  render() {
    return (
      <div className="App">
        <Header onClick={ 
            {
              onCurso: this.onCursoClickHandler, 
              onNota: this.onNotaClickHandler
            }
          } />
      <Body data={this.state} />
      </div>
      
    );
  }
}

export default App;
