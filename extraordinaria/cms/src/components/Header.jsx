import React from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { bodyState } from "../recoil/atoms";
import { sessionState } from "../recoil/atoms";

export default ({ className }) => {
  const [body, setBody] = useRecoilState(bodyState);
  const [session, setSession] = useRecoilState(sessionState);
  return (
    <Nav>
      <NavHeader>
        <NavLeft onClick={() => setBody("AddIngredient")}>
          Añadir Ingrediente
        </NavLeft>
        <NavLeft onClick={() => setBody("AddRecipe")}>Añadir Receta</NavLeft>
        <NavLeft onClick={() => setBody("ViewRecipes")}>
          Mostrar Recetas
        </NavLeft>

        {session.logged
          ? (
            <NavRight
              onClick={() => {
                setBody("Logout");
              }}
            >
              Finalizar Sesión
            </NavRight>
          )
          : (
            <div>
              <NavRight onClick={() => setBody("Login")}>
                Iniciar Sesión
              </NavRight>
              <NavRight onClick={() => setBody("Signin")}>Registrarse</NavRight>
            </div>
          )}
      </NavHeader>
    </Nav>
  );
};

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const NavHeader = styled.div`
  width: 1010px;
  padding: 26px 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavRight = styled.div`
  width: 350px;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
`;

const NavLeft = styled.div`
  width: 170px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
