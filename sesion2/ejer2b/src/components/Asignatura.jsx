import React, { Component } from 'react';

class Asignatura extends Component {
    state = {
        view: true,
    }

    onClick = () => {
        this.setState({view: !this.state.view})
    }

    render(){
        return (
            <div>
                <h1 onClick={() => this.onClick()}>{this.props.asignatura.asignatura}</h1>
                {this.state.view?<h2>{this.props.asignatura.profesor}</h2>:null}
                {/* <Alumnos alumnos={this.props.asignatura.alumnos} /> */}
                {/* <Estadisticas alumnos={this.props.asignatura.alumnos} /> */}
                </div>
        )
    }
}

export {Asignatura as default}