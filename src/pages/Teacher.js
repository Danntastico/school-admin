import React from 'react';
import { Headbar } from '../components/Headbar';
import { Table } from '../components/Table';
import { TableItem } from '../components/TableItem';

export const Teachers = () => {
  return (
    <>
      <Headbar title='Teacher View' />
      <div className='pageContent'>
        <Table title='Active Teachers'>
          <TableItem />
        </Table>
      </div>
    </>
  );
};
