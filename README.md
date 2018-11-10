# Chapter: Why we test
We mainly right tests to achieve two things:

1. A level of confidence in the code being added to the larger whole and not breaking any
existing functionality in the larger whole.

2. Secure the code we write at any given point in time amd avoid any regression bugs from
new code added to the codebase.

### Example
The code below looks okay and correct, but since we are not checking if the inputs to the
function `sum` are integers we can easily concatenate the provided attributes rather
than sum up.

```javascript
class Math {
  static sum (...args) {
    const result = args.reduce((accumulator, argument) => accumulator + arg);

    return result;
  }
}
```

Having this code snippet be covered by tests would give us a chance to cover all the edge
cases and if & when we do we can ensure that the bug we fixed never arises again.


### Exercise
Write code that recieves the class and test that all the edge cases are covered.

**Exercise template**

```javascript
var math = require("./math.js");

// Throw an error on a fail
// E.g. throw new Error("Math does not cover for strings as arguments");
```




