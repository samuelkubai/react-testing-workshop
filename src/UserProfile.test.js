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

