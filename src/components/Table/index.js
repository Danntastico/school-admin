import React from 'react';
import { TableContainer, TableHeader, TableContent } from './styles';
import { Button } from '../Button';

export const Table = ({ title = 'Items', children }) => {
  return (
    <TableContainer>
      <TableHeader>
        <h2>{title}</h2>
        <Button>Add New Item</Button>
      </TableHeader>
      <TableContent>{children}</TableContent>
    </TableContainer>
  );
};
