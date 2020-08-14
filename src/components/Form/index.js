import React from 'react';
import { FormHeader, FormTitle, FormBody, FormFooter } from './styles';
export const Form = ({ children, title, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormHeader>
        <FormTitle> {title} </FormTitle>
      </FormHeader>
      <FormBody>{children[0]}</FormBody>
      <FormFooter>{children[1]}</FormFooter>
    </form>
  );
};
