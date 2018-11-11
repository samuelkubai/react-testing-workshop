# Chapter: Mocking functions 
To test components in isolation you most of the time require to mock out the functions which
this components depend on to have the component not rely on the consumer of the component
and gurantee that if the API contract of the component is kept everything will work just as
expected.

To have your component easily mockable though you need to achieve almost **pure functions**; by
pure function we mean you component given the same inputs should consistently produce the same
outputs and not require something in it's environment to function properly, nor should it
touch the environment it is placed in. Achieving this pure function status makes a components
mocking almost trivial.

> Not all components can achieve the pure function status though and they can be mocked too

### Example
The component below receives a redirect callback function that is called any time the user
clicks on the image to be redirected to where the image should redirect to. The component
here has clearly stated that it's scope does not include handling the logic of  the image
redirect.

**User profile component**

```javascript
import React, { Component } from 'react';
import './UserProfile.css';

export default class UserProfile extends Component {
  renderBadge(manager) {
    if (manager) {
      return (
        <div className="badge badge--manager">
          Manager
        </div>
      );
    }

    return (
      <div className="badge">
        Not manager
      </div>
    );
  }

  render () {
    const { user } = this.props;
    const { image, name, title, department, manager, imageRedirect } = user;

    return (
      <div className="user__profile">
        <div className="user__image" onClick={imageRedirect}>
          <img src={image} />
        </div>

        <div className="user__info">
          <div className="user__name">
            {name}
          </div>
          <div className="user__info">
            {`${title} - ${department}`}
          </div>
          {this.renderBadge(manager)}
        </div>
      </div>
    );
  }
}
```
To test the function and ensure the function is called when the right event occurs you can easily
use the `jest.fn()` implementation of function mockups. This function will be able to inform you
how many times it was called and the arguments used to call it.

```javascript
import React from 'react';
import { mount } from 'enzyme';
import UserProfile from './UserProfile';

const imageRedirect = jest.fn();

function generateUser (overrides) {
  return {
    image: '',
    name: 'Samuel Kubai Kamau',
    manager: true,
    title: 'Technical Team Lead',
    department: 'Talent Development Department',
    imageRedirect,
    ...overrides
  };
}


it('it calls the image render function when clicked', () => {
  // Create world
  const user = generateUser();
  const wrapper = mount(<UserProfile user={user} ></UserProfile>);

  // Simulate user activity
  wrapper.find('img').simulate('click');

  // Make assertions
  expect(imageRedirect.mock.calls.length).toBe(1);
});

```

In our test any change to the location of anything of the page whether intentional or accidental
will be called out and flagged for inspection by the developer making the changes.

### Exercise

