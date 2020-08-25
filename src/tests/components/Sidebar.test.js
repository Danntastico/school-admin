import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';

describe('Unit Test for <Sidebar />', () => {
  const wrapper = shallow(<Sidebar />);

  test('Should show sidebar correctly (Shallow copy)', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render 4 different links', () => {
    const navList = wrapper.prop('children')[1].props.children;
    expect(navList.length).toBe(4);
  });
});
