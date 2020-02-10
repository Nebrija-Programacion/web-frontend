import React from 'react';
import "./styles.css";

const FilNota = (props) => {
    const onNota = props.onClick;
    return (
        <div> 
            <div className="filterButton" onClick={() => onNota(1)}>Aprobados</div>
            <div className="filterButton" onClick={() => onNota(2)}>Necesita Mejorar</div>
            <div className="filterButton" onClick={() => onNota(0)}>Todos</div>
        </div>
    )
}

export {FilNota as default};