import "./styles.css";
import React from 'react';

const FilCur = (props) => {
    const onCurso = props.onClick;
    return (
        <div>
            <div className="filterButton" onClick = { () => onCurso(1)}> Primero </div>
            <div className="filterButton" onClick = { () => onCurso(2)}> Segundo </div>
            <div className="filterButton" onClick = { () => onCurso(3)}> Tercero </div>
            <div className="filterButton" onClick = { () => onCurso(0)}> Todos </div>
        </div>
    )
}

export {FilCur as default};