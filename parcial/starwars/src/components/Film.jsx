import React from "react";
import "./style.css";

const Film = props => {
  const film = props.film;
  const onSelect = props.onSelect;

  return (
    <div className="Film" onClick={() => onSelect(film.episode_id)}>
      <img className="FilmPoster" src={film.image} />
      <div>
        <span className="FilmTitle">{film.title}</span>
        <br />
        <span className="FilmData">Episode: {film.episode_id}</span>
      </div>
    </div>
  );
};

export { Film as default };
