import React from "react";
import useAge from "../hooks/useAge";

const Age = props => {
  const age = useAge();
  props.ageHandler(age);
  return <div>{age}</div>;
};

export { Age as default };
