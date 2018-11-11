import React from 'react';
import { mount } from 'enzyme';
import ToggleButton from './ToggleButton';

it('it toggles the button correctly', () => {
  // Create world
  const wrapper = mount(<ToggleButton></ToggleButton>);

  // Simulate user activity
  wrapper.find('button').simulate('click');

  // 1. Testing implementation details
  expect(wrapper.state().active).toEqual(true);


  // 2. Test the from the user's perspective
  expect(wrapper).toMatchSnapshot();
});

