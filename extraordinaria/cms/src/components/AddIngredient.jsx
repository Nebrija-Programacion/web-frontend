import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sessionState } from "../recoil/atoms";
import { OK, Error, Title } from "../style/styles";

const ADD_INGREDIENT_MUTATION = gql`
  mutation AddIngredient($name: String!, $userid: ID!, $token: String!) {
    addIngredient(name: $name, userid: $userid, token: $token) {
      _id
      name
    }
  }
`;

const INGEDIENTS_LIST_QUERY = gql`
  {
    ingredients {
      _id
      name
    }
  }
`;

export default () => {
  const [session] = useRecoilState(sessionState);
  const [addIngredient, { data, error }] = useMutation(
    ADD_INGREDIENT_MUTATION,
    {
      update(cache, { data: { addIngredient } }) {
        const { ingredients } = cache.readQuery({
          query: INGEDIENTS_LIST_QUERY,
        });
        cache.writeQuery({
          query: INGEDIENTS_LIST_QUERY,
          data: { ingredients: ingredients.concat([addIngredient]) },
        });
      },
      onError(error) {
        if (error.message.includes("duplicate key")) {
          console.error("Error: Dupulicated Key");
        } else if (error.message.includes("Cast to ObjectId")) {
          console.log("Usuario no loggeado");
        } else {
          console.log(
            "Ha ocurrido un error inesperado, vuelve a intentarlo más tarde",
          );
        }
      },
    },
  );

  const add = (name) => {
    console.log(`userid: ${session.userid}, token: ${session.token}`);
    addIngredient({
      variables: { name: name, userid: session.userid, token: session.token },
    });
  };

  let output = "";

  if (data) {
    output = (<OK>Ingrediente añadido con éxito</OK>);
  }

  if (error) {
    if (error.message.includes("duplicate key")) {
      output = (
        <Error>El ingrediente ya existe</Error>
      );
    } else if (error.message.includes("Cast to ObjectId")) {
      output = (
        <Error>El usuario no está loggeado</Error>
      );
    } else {
      output = (
        <Error>
          Ha ocurrido un error inesperado, vuelve a intentarlo más tarde
        </Error>
      );
    }
  }
  return (
    <AddIngredient>
      <Title>Añadir nuevo ingrediente</Title>
      {output}
      <Input id="name" type="text" placeholder="Nombre del Ingrediente"></Input>
      <Button
        onClick={() => {
          add(document.getElementById("name").value);
          document.getElementById("name").value = "";
        }}
      >
        Añadir Ingrediente
      </Button>
    </AddIngredient>
  );
};

const AddIngredient = styled.div`
  color: #333333;
  margin: 2em;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid #333;
  height: 30px;
  width: 500px;
`;

const Button = styled.button`
  color: black;
  font-weight: bold;
  height: 30px;
  width: 500px;
  border: 1px solid #333;
  &:hover {
    background-color: #bbbbbb;
    cursor: pointer;
  }
`;
