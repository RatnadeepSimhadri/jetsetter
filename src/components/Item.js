import React, { Component } from 'react';
import './Item.css';

class Item extends Component {


  render() {
    const { item , onCheckOff  , onRemove} = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={(e) => {
                onCheckOff(e.target.id);
                e.preventDefault();
            }}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={(event) => {
            onRemove(item.id); // Have to use the Item because the Element is different from the Input field and cannot be found from event Target
            event.preventDefault();
        }}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
