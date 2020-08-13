import React from 'react';
import { Headbar } from '../components/Headbar';
import { Table } from '../components/Table';

export const Teachers = () => {
  return (
    <>
      <Headbar title='Teacher View' />
      <div className='pageContent'>
        <Table></Table>
      </div>
    </>
  );
};
