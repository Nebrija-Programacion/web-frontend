import React from "react";
import "./Styles.css";

const CursoFilter = (props) => {
    return (
        <div className="FiltersRow">
            <div className="Filter" onClick = {() => props.onClick(1)}> Primero </div>
            <div className="Filter" onClick = {() => props.onClick(2)}> Segundo </div>
            <div className="Filter" onClick = {() => props.onClick(3)}> Tercero </div>
            <div className="FilterAll" onClick = {() => props.onClick(0)}> Todos </div>
        </div>
    );
};

export {CursoFilter as default}