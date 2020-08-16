import React from 'react';
import { Container, FirstColumn } from './styles';
export const CardContainer = ({ children }) => {
  return (
    <Container>
      <FirstColumn>{children[0]}</FirstColumn>
      <FirstColumn>{children[1]}</FirstColumn>
    </Container>
  );
};
