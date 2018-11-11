# Chapter: Using object factories
When testing in React you will most definitely find yourself building components or making
API calls with some form of JSON object, e.g. composing the fields you need to create
a new post or comment.

However, creating this objects for individual components' tests leads to not easy to read
and even hard maintance of the code test suite you leave behind.

### Example
In the example below we have a component which readly renders the user profile information of
user taking in a user object as a prop and rendering the correct details for the user.

**User profile component**

```javascript
import React, { Component } from 'react';
import './UserProfile.css';

export default class UserProfile extends Component {
  render () {
    const { user } = this.props;
    const { image, name, title, department } = user;

    return (
      <div className="user__profile">
        <div className="user__image">
          <img src={image} />
        </div>

        <div className="user__info">
          <div className="user__name">
            {name}
          </div>
          <div className="user__info">
            {`${title} - ${department}`}
          </div>
        </div>
      </div>
    );
  }
}
```
To test the component above we would need to pass in a user object in our test file, but we need
to think this through further, we need a `Factory` to generate the user object for our tests
and future tests. Considerations of building a factory should be:

1. Are there any overrides we need to allow for our tests or future tests?
2. Are there options we need to avail to build the object correctly?

For our case:

1. We need to allow overrides
2. We require no extra options in building our user factory for now

```javascript
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

```

In our test above any changes to the user object can be easily change on one section of our code
and be tested against all the components that use this utility in a matter of minutes.

> This object factories should in most cases be extracted to their own files to allow for easier code reuse

### Exercise

