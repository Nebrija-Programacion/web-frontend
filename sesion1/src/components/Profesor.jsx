import React from 'react';
import "./Styles.css";

const Profesor = (props) => {
    return (
        <div className="Profesor">
            {props.name}
        </div>
    );
}

export {Profesor as default}