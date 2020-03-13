import React from "react";
import "./style.css";
import FilmDetail from "./FilmDetail";

const Detail = props => {
  const closeHandler = props.closeHandler;
  const film = props.detail;
  return (
    <div className="Detail">
      <img
        alt="close"
        src="https://icons-for-free.com/iconfiles/png/512/cercle+close+delete+dismiss+remove+icon-1320196712448219692.png"
        className="CloseIcon"
        onClick={() => closeHandler()}
      />
      <br />
      <FilmDetail film={film}></FilmDetail>
    </div>
  );
};

export { Detail as default };
