import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Other = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["webtoken"]);
  return (
    <div>
      <p>La cookie view-menu vale: {cookies["view-menu"]}</p>
    </div>
  );
};

export { Other as default };
