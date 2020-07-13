import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sessionState, bodyState } from "../recoil/atoms";
import { OK, Error, Title } from "../style/styles";

const LOGOUT_MUTATION = gql`
  mutation logout($userid: ID!, $token: String!) {
    logout(userid: $userid, token: $token) {
      _id
    }
  }
`;

export default () => {
  const [session, setSession] = useRecoilState(sessionState);
  const [body, setBody] = useRecoilState(bodyState);
  const [errorMessage, setErrorMessage] = useState("");
  const [logoutMutation, { data }] = useMutation(LOGOUT_MUTATION, {
    onError(error) {
      setErrorMessage(
        "Ha ocurrido un error inesperado, vuelve a intentarlo más tarde",
      );
    },
  });

  const logout = (userid, token) => {
    logoutMutation({
      variables: { userid, token },
    });
  };

  if (data) {
    setSession({ logged: false, userid: "", token: "" });
    setBody("Login");
  }

  return (
    <Logout>
      <Title>Logout</Title>
      {errorMessage !== "" ? <Error>{errorMessage}</Error> : null}
      {session.logged
        ? (
          <Button onClick={() => logout(session.userid, session.token)}>
            Confirme que desea salir
          </Button>
        )
        : null}
    </Logout>
  );
};

const Logout = styled.div`
  color: #333333;
  margin: 2em;
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
