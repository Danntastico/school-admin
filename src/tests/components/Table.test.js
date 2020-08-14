import React from 'react';
import { shallow, mount } from 'enzyme';
import { Table } from '../../components/Table';
import { TableItem } from '../../components/TableItem';

describe('Unit test for <Table>', () => {
  const testConfig = {
    id: '12345',
    lastName: 'lastName',
    name: 'name',
  };
  const wrapper = mount(
    <Table title='test Items'>
      <TableItem config={testConfig} type='teacher' />
    </Table>
  );

  test('Should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render Title correctly', () => {
    const title = wrapper.find('h2');
    expect(title.text().trim()).toBe('test Items');
  });
});
