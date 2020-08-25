import React from 'react';
import { Header } from './styles';

export const Headbar = ({ title }) => {
  return (
    <Header>
      <h3>{title}</h3>
    </Header>
  );
};
