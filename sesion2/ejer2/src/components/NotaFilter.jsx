import React from "react";
import "./Styles.css";

const NotaFilter = (props) => {
    return (  
        <div className="FiltersRow">
            <div className="Filter" onClick = {() => props.onClick(1)}> Aprobados </div>
            <div className="Filter" onClick = {() => props.onClick(2)}> Suspensos </div>
            <div className="FilterAll" onClick = {() => props.onClick(0)}> Todos </div>
        </div>
    );
};

export {NotaFilter as default}