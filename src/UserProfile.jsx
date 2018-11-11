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
