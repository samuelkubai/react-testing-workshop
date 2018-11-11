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
