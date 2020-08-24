import React from 'react';
import { MdEdit } from 'react-icons/md';
import { FormHeader, FormTitle, FormBody, FormFooter, EditBtn } from './styles';
export const Form = ({ children, title, onSubmit, isEditable, onClick }) => {
  const editBtn = () => {
    if (isEditable)
      return (
        <EditBtn onClick={onClick}>
          <MdEdit />
        </EditBtn>
      );
  };
  return (
    <form onSubmit={onSubmit}>
      <FormHeader>
        <FormTitle> {title} </FormTitle>
        {editBtn()}
      </FormHeader>
      <FormBody>{children[0]}</FormBody>
      <FormFooter>{children[1]}</FormFooter>
    </form>
  );
};
