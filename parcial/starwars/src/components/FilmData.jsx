import React from "react";
import "./style.css";

const FilmData = props => {
  const closeHandler = props.closeHandler;
  const film = props.film;
  return (
    <div className="FilmData">
      {Object.keys(props).map(key => (
        <div>
          <strong>{key}</strong>:{props[key]}
        </div>
      ))}
    </div>
  );
};

export { FilmData as default };
