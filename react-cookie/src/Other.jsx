import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Other = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["webtoken"]);
  return (
    <div>
      <p>La cookie token vale: {cookies.token}</p>
    </div>
  );
};

export { Other as default };
