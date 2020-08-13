import React from 'react';
import { TableContainer, TableHeader } from './styles';

export const Table = ({ title = 'Items', children }) => {
  return (
    <TableContainer>
      <TableHeader>
        <h2>{title}</h2>
        <button>Add New Item</button>
      </TableHeader>
      <div>{children}</div>
    </TableContainer>
  );
};
