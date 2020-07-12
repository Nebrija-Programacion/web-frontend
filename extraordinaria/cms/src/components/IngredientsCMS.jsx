import React from "react";
import styled from "styled-components";

import IngredientsList from "./IngredientsList";
import AddIngredient from "./AddIngredient";

export default () => {
  return (
    <IngredientsCMS>
      <IngredientsList />
      <AddIngredient />
    </IngredientsCMS>
  );
};

const IngredientsCMS = styled.div`
  display: flex;
  flex-direction: row;
`;
