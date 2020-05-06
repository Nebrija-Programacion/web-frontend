import React, { useState, useContext } from "react";
import AppContext from "../AppContext";

const CompExample = () => {
  const context = useContext(AppContext);

  return (
    <div>
      {context.lang.get}
      <button onClick={() => context.lang.set("fr")}>French</button>
    </div>
  );
};

export { CompExample as default };
