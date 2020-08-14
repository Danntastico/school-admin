import React from 'react';
import { TableHeader, TableContent } from './styles';
import { Button } from '../Button';
import { CardContainer } from '../CardContainer';

export const Table = ({ title = 'Items', children }) => {
  return (
    <CardContainer>
      <TableHeader>
        <h2>{title}</h2>
        <Button>Add New Item</Button>
      </TableHeader>
      <TableContent>{children}</TableContent>
    </CardContainer>
  );
};
