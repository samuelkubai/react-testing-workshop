# Chapter: Snapshot testing 
Snapshots are a type of assertion introduce by _jest_ to act as a form of a visual assertion,
snaphots create an acceptable copy of html from a specific state and compare the rest of
future renders on the same state with that snapshot and thus ensure that the html
produce at a given state is the same and any updates are explicity done.


Key things to remember with snaphots:
1. Always push them to your version control repositories. 

The reason for this is that the other contributors of the team need to ensure they have not
changed the structure of the html when adding any new modifications to the code and
explicitly allow any changes if that was an expected outcome of their modification.

2. Mainly use mount for snapshots.

The reason for this is you need to compare the structure of HTML produced when you render
the component in the browser and _mount_ will give you the HTML equal to the one we
expect to render on the browser.

You can assert that various facets of your component or collection of components has been
rendered by explicitly finding the element with it's identifier, but this cannot assure
that the location/placement of the element is where you intended for it to be.

For that use snapshots.

### Example
In the example below we have a component which readly renders the user profile information of
user taking in a user object as a prop and rendering the correct details for the user. We
have added a manager badge to be rendered if the user is a manager or not.

**User profile component**

```javascript
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
    const { image, name, title, department, manager } = user;

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
          {this.renderBadge(manager)}
        </div>
      </div>
    );
  }
}
```

To test that the manager badge is rendered and shows the correct text we can explicitly look for
the badge and it's text, but to ascertain that the component is always rendered in the right
position we use snapshots for that.

```javascript
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
```

In our test any change to the location of anything of the page whether intentional or accidental
will be called out and flagged for inspection by the developer making the changes.

### Exercise

