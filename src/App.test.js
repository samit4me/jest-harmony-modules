import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  shallow(<App />);
});

// it('squared method works correctly', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.instance().squared(2)).toBe(4);
// });