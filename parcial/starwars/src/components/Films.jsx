import React from "react";
import "./style.css";
import Film from "./Film.jsx";

const Films = props => {
  const data = props.data;
  const onSelect = props.onSelect;

  return (
    <div className="Films">
      {data.map(film => (
        <Film film={film} onSelect={onSelect} key={film.episode_id} />
      ))}
    </div>
  );
};

export { Films as default };
