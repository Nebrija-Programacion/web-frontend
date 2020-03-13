import React from "react";
import "./style.css";
import FilmData from "./FilmData";

const FilmDetail = props => {
  const closeHandler = props.closeHandler;
  const film = props.film;
  return (
    <div className="FilmDetail">
      <img
        alt="close"
        src={film.image}
        className="FilmDetailPoster"
        onClick={() => closeHandler()}
      />
      <br />
      <FilmData
        Title={film.title}
        Episode={film.episode_id}
        Director={film.director}
        Release={film.release_date}
        Beginning={film.opening_crawl}
      />
    </div>
  );
};

export { FilmDetail as default };
