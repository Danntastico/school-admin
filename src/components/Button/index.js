import React from 'react';
import { Btn } from './styles';
export const Button = ({ label = 'Button', isDisabled }) => {
  return <Btn disabled={isDisabled}>{label}</Btn>;
};
