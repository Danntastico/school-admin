import React from 'react';
import { Headbar } from '../../components/Headbar';
import { shallow } from 'enzyme';

describe('Unit test to <Headbar />', () => {
  const testTitle = 'Testing the Headbar Title';
  const wrapper = shallow(<Headbar title={testTitle} />);

  test('Should show the component correctly (shallow)', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should show the title passed by props', () => {
    const title = wrapper.find('h3').text().trim();
    expect(title).toBe(testTitle);
  });
});
