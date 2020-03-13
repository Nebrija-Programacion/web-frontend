import React from "react";
import "./Styles.css";

import CursoFilter from "./CursoFilter"
import NotaFilter from "./NotaFilter"

const Header = (props) => {
    return (
        <div className="Header">
            <CursoFilter onClick = {props.cursoOnClick} />
            <NotaFilter onClick = {props.aprobadoOnClick} />
        </div>
    );
};

export {Header as default}