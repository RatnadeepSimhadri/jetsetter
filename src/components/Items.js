import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    // What state does this component have?
  };

  updateSearchTerm = searchTerm => {};
  itemCheckOff = id => {
      this.props.itemsListUpdate({type:'TOGGLE', itemID:id});
    };

  itemDelete = id => {
      this.props.itemsListUpdate({type:'REMOVE', itemID:id});
  };

  render() {
    const { title, items  } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={''} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            item.value.toLowerCase().includes(''.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={this.itemCheckOff}
              onRemove={this.itemDelete}
              item={item}
            />
          ))}
      </section>
    );
  }


}

export default Items;
