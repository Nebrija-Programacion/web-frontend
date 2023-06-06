import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Container>
      <Button
        onClick={() => {
          window.location.href = "/medico";
        }}
      >
        Soy Médico
      </Button>
      <Button
        onClick={() => {
          window.location.href = "/paciente";
        }}
      >
        Soy Paciente
      </Button>
    </Container>
  );
};

const Button = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e6e6e6;
  }
  &:active {
    background-color: #d9d9d9;
  }
`;

// container centered on page
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 10px;
  // shadow
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 100px 100px;
`;

export default Home;
