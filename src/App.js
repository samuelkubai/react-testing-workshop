import React, { Component } from 'react';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    const user = {
      name: 'Samuel Kubai Kamau',
      title: 'Technical Team Lead',
      department: 'Talent Development Department'
    }

    return (
      <UserProfile user={user}></UserProfile>
    );
  }
}

export default App;
