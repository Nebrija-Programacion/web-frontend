import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { OK, Error, Title } from "../style/styles";

const INGEDIENTS_LIST_QUERY = gql`
  {
    ingredients {
      _id
      name
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(INGEDIENTS_LIST_QUERY);
  if (loading) return <p>Cargando lista de ingredientes...</p>;
  if (error) return <p>Error cargando la lista de ingredientes...</p>;

  return (
    <IngredientsList>
      <Title>Ingredientes Disponibles</Title>
      {data.ingredients.map(({ _id, name }) => (
        <Ingredient key={_id}>{name}</Ingredient>
      ))}
    </IngredientsList>
  );
};

const IngredientsList = styled.div`
  color: #333333;
  margin: 2em;
  display: flex;
  flex-direction: column;
`;

const Ingredient = styled.div`
  margin-left: 1em;
`;
