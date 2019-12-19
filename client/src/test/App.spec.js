//getting Error: Cannot find module 'webpack-cli/bin/config-yargs' when testing
import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App.js';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// describe('App component', () => {

//   describe('invoking getFirst', () => {
//     it('should update the count by 1 when invoked by default', () => {
//       const wrapper = shallow(<App />);
//       const instance = wrapper.instance();
//       expect(wrapper.state('first')).toBe(null);
//       instance.componentDidMount();
//       expect(wrapper.state('first')).toBe('Jane');
//     });

//   });
// });



// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import App from '../client/App.js';
// import Adapter from 'enzyme-adapter-react-16';




import { mount } from 'enzyme';

describe('App component', () => {
  it('should call getData', () => {
    const spy = jest.spyOn(App.prototype, 'getFirst');
    mount(<App />);
    expect(App.prototype.getFirst).toHaveBeenCalledTimes(1)
  });
})


// Enzyme.configure({ adapter: new Adapter() });






// describe('App component', () => {
//   const wrapper = shallow(<App />);

//   test('renders', () => {
//     expect(wrapper.exists()).toBe(true);
//   });

//   // test('first name is loaded', () => {
//   //   const instance = wrapper.instance();
//   //   jest.spyOn(instance, 'getFirst');
//   //   instance.componentDidMount();
//   //   expect(instance.getFirst).toHaveBeenCalled();
//   // });

//   // test('middle name is loaded', () => {
//   //   const instance = wrapper.instance();
//   //   jest.spyOn(instance, 'getMiddle');
//   //   instance.componentDidMount();
//   //   expect(instance.getMiddle).toHaveBeenCalled();
//   // });

//   // test('last name is loaded', () => {
//   //   const instance = wrapper.instance();
//   //   jest.spyOn(instance, 'getLast');
//   //   instance.componentDidMount();
//   //   expect(instance.getLast).toHaveBeenCalled();
//   // });

// });