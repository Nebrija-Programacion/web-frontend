import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sessionState } from "../recoil/atoms";
import { OK, Error, Title } from "../style/styles";

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $pwd: String!) {
    login(userName: $userName, pwd: $pwd) {
      _id
      token
    }
  }
`;

export default () => {
  const [session, setSession] = useRecoilState(sessionState);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginMutation, { data }] = useMutation(LOGIN_MUTATION, {
    onError(error) {
      setSession({
        userid: "",
        token: "",
        logged: false,
      });
      if (error.message.includes("Non existent or not authorized")) {
        console.error("Usuario o contraseña no válidos");
        setErrorMessage("Usuario o contraseña no válidos");
      } else {
        setErrorMessage(
          "Ha ocurrido un error inesperado, vuelve a intentarlo más tarde",
        );
      }
    },
  });

  const login = (userName, pwd) => {
    loginMutation({
      variables: { userName, pwd },
    });
  };

  if (data) {
    if (session.token !== data.login.token) {
      setSession({
        userid: data.login._id,
        token: data.login.token,
        logged: true,
      });
      setErrorMessage("");
    }
  }
  return (
    <Login>
      <Title>Login</Title>
      {errorMessage !== "" ? <Error>{errorMessage}</Error> : null}
      {session.logged
        ? (
          <OK>Sesión iniciada correcatmente</OK>
        )
        : (
          <Login>
            <Input
              id="userName"
              type="text"
              placeholder="Nombre de usuario"
            >
            </Input>
            <Input id="pwd" type="password" placeholder="Contraseña"></Input>
            <Button
              onClick={() => {
                login(
                  document.getElementById("userName").value,
                  document.getElementById("pwd").value,
                );
              }}
            >
              Enviar
            </Button>
          </Login>
        )}
    </Login>
  );
};

const Login = styled.div`
  color: #333333;
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
