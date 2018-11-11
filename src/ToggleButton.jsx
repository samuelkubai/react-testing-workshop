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
