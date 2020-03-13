import React from 'react';
import FilCur from "./FilCur";
import FilNota from "./FilNota";
import "./styles.css";

const Header = (props) => {
    const {onCurso, onNota} = props.onClick;

    return (
        <div className="header">
            <FilCur onClick = {onCurso}/>
            <FilNota onClick = {onNota}/>
        </div>
    )
}

export {Header as default};