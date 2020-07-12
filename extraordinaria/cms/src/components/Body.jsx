import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import AddIngredient from "./IngredientsCMS";
import AddRecipe from "./AddRecipe";
import Login from "./Login";
import Logout from "./Logout";
import { bodyState } from "../recoil/atoms";

export default () => {
  const [body, setBody] = useRecoilState(bodyState);
  return (
    <Body>
      {body === "AddIngredient" ? (
        <AddIngredient />
      ) : body === "AddRecipe" ? (
        <AddRecipe />
      ) : body === "Login" ? (
        <Login />
      ) : body === "Logout" ? (
        <Logout />
      ) : null}
    </Body>
  );
};

const Body = styled.div`
  width: 1010px;
  height: 100%;
  align-items: center;
`;
