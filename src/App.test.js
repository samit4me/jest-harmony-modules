import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('squared method works correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.instance().squared(2)).toBe(4);
});