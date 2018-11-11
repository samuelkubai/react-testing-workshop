# Chapter: What we test
When testing it is much more effective to test use cases rather than implementation 
details of the component in question.

The search of _100%_ test converage can sometimes lead various developers to test
implementation details over finding what ever use cases the implementation in
question is used for.

Testing the implementation details of a component only leads to writing brittle
tests on your application, which every simple refactor run just ends up
needing you to alter the code's tests again.

To test the right things we should always remember why we test in the first place:

1. To attain a level of confidence in the code being added to the larger whole and 
assert that none of the existing functionality in the larger whole is broken.

2. Secure the code we write at any given point in time amd avoid any regression bugs from
new code added to the codebase after this modification.

### Example
The implementation below is of a button that when clicked changes color from white to blue and
vice versa. There are two ways to go about testing this button.

**Button Component**
Here is the button component code

```javascript
import React, { Component } from 'react';

export default class ToggleButton extends Component {
  state = {
    active: false
  }

  renderStyles = () => {
    return {
      backgroundColor: this.state.active ? 'blue' : 'white',
      color: this.state.active ? 'white' : 'blue'
    }
  }

  toggleButton = () => {
    this.setState((oldState) => {
      return {...oldState, active: !oldState.active}
    })
  }

  render () {
    return (
      <button 
        style={this.renderStyles()}
        onClick={this.toggleButton}
      >
        Toggle me 
      </button>
    )
  }  
}
```

We can

1. Test that the state is changed correctly once the button is pressed.

2. Test that when a user presses on the button the correct class is toggled on the button.

```javascript
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
```

From the example above changing the `state` variable `active` to `toggled` would break
the tests although essentially the button still works as expected from the user's
perspective.


### Exercise
Fix the test below and cover for user cases rather than covering for implementation details.

**Exercise template**

```javascript
var math = require("./math.js");

// Throw an error on a fail
// E.g. throw new Error("Math does not cover for strings as arguments");
```
