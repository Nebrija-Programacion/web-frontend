import React, { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";

const Counter = props => {
  const contador = useCounter(props.timeout, props.overflow);
  return (
    <div>
      <div>{contador}</div>
    </div>
  );
};

export { Counter as default };
