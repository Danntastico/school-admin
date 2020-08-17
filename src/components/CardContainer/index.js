import React from "react";
import { Container, FirstColumn } from "./styles";
const CardContainer = ({ children }) => {
  return (
    <Container>
      <FirstColumn>{children[0]}</FirstColumn>
      <FirstColumn>{children[1]}</FirstColumn>
    </Container>
  );
};
