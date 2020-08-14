import React from 'react';
import { Btn } from './styles';
export const Button = ({ label = 'Button' }) => {
  return <Btn>{label}</Btn>;
};
