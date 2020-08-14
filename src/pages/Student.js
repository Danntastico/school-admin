import React from 'react';
import { Link } from '@reach/router';
import { Headbar } from '../components/Headbar';
import { Table } from '../components/Table';
import { TableItem } from '../components/TableItem';
import { DETAIL_STUDENT_PATH } from '../utils/constants';

export const Students = () => {
  return (
    <div>
      <Headbar title='Student View' />
      <div className='pageContent'>
        <Table title='Active Students'>
          <Link to={DETAIL_STUDENT_PATH}>
            <TableItem />
          </Link>
        </Table>
      </div>
    </div>
  );
};
