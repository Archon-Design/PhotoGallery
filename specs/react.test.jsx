/* eslint-disable no-undef */
import React from 'react';
import {mount, shallow} from 'enzyme';

<<<<<<< HEAD
import App from '../src/components/App.jsx';

describe('<App />', () => {
  it('should render a div', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div')).toExist();
  });
  it('should not render a list', () => {
    const wrapper = shallow(<App />);
=======
import HeaderLinks from '../src/components/HeaderLinks.jsx';

describe('<HeaderLinks />', () => {
  it('should render a div', () => {
    const wrapper = mount(<HeaderLinks />);
    expect(wrapper.find('div')).toExist();
  });
  it('should not render a list', () => {
    const wrapper = shallow(<HeaderLinks />);
>>>>>>> 1339b0c (Implemented seeding and simple component test)
    expect(wrapper.find('ul')).not.toExist();
  });
});
