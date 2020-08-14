import React from 'react';
import { shallow } from 'enzyme';
import { TableItem } from '../../components/TableItem';

describe('Unit tests for <TableItem />', () => {
  const testConfig = {
    id: '12345',
    lastName: 'lastName',
    name: 'name',
  };
  const wrapper = shallow(<TableItem config={testConfig} type='teacher' />);

  test('Should show the item correctly (shallow)', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
