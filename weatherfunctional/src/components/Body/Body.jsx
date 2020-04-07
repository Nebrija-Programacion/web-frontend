import React, { useState } from "react";
import "./Body.css";
import Search from "../Search/Search";
import Selected from "../Selected/Selected";

const Body = () => {
  const [selected, setSelected] = useState(null);

  const onSelectHandler = (result) => {
    console.log("result");
    setSelected(result);
  };

  return (
    <div className="Body">
      <Search onSelectHandler={onSelectHandler} />
      {selected ? <Selected data={selected} /> : null}
    </div>
  );
};

export { Body as default };
