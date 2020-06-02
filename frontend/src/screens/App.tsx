import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import DuckForm from "./DuckForm";

const Container = styled.div`
  min-height: 100%;
  width: 70%;
  background-color: #85fd99;
  padding: 30px;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <DuckForm />
    </Container>
  );
};

export default App;
