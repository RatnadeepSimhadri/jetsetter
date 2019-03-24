import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import './NewItem.css';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({
        value:event.target.value
    });
    event.stopPropagation();
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit({
        type: 'ADD',
        itemName: value
    });
    event.preventDefault();
    // After the New Value has been handed over to the Event Handler Set the State to empty to clear the Text Box
      this.setState({
          value:''
      });
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
