import React from 'react';
import { mount } from 'enzyme';
import UserProfile from './UserProfile';

function generateUser (overrides) {
  return {
    image: '',
    name: 'Samuel Kubai Kamau',
    title: 'Technical Team Lead',
    department: 'Talent Development Department',
    ...overrides
  };
}

it('it renders the user component correctly', () => {
  // Create world
  const user = generateUser();
  const wrapper = mount(<UserProfile user={user} ></UserProfile>);

  // Simulate user activity
  // N/A 

  // Make assertions
  expect(wrapper).toMatchSnapshot();
});

it('it renders the manager badge correctly', () => {
  // Create world
  const user = generateUser({ manager: true });
  const wrapper = mount(<UserProfile user={user} ></UserProfile>);

  // Simulate user activity
  // N/A 

  // Make assertions
  // 1, Ensure the right badge is shown
  expect(wrapper.find('.badge--manager').length).toBe(1);
  expect(wrapper.find('.badge--manager').text()).toEqual("Manager");

  // Ensure the composition of the whole page is what we intend
  expect(wrapper).toMatchSnapshot();
});

it('it renders the none manager correctly', () => {
  // Create world
  const user = generateUser({ manager: false });
  const wrapper = mount(<UserProfile user={user} ></UserProfile>);

  // Simulate user activity
  // N/A 

  // Make assertions
  expect(wrapper).toMatchSnapshot();
});

