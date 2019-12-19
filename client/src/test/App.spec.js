//getting Error: Cannot find module 'webpack-cli/bin/config-yargs' when testing
//troubleshooted error by updating webpack and webpack-cli, then removed webpack-jest after no change
//attempted to debug further syntax error by using mockfiles and moduleNameMapper but to no avail
//submitting due to time constraint but will look further into possible solutions
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../App.js';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<App />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('first name is loaded', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getFirst');
    instance.componentDidMount();
    expect(instance.getFirst).toHaveBeenCalled();
  });

  test('middle name is loaded', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getMiddle');
    instance.componentDidMount();
    expect(instance.getMiddle).toHaveBeenCalled();
  });

  test('last name is loaded', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getLast');
    instance.componentDidMount();
    expect(instance.getLast).toHaveBeenCalled();
  });

});