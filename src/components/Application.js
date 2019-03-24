import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
   items : [...defaultState]
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  render() {
    // Get the items from state

    return (
      <div className="Application">
        <NewItem onSubmit = {this.itemsListUpdate} />
        <CountDown />
        <Items itemsListUpdate = {this.itemsListUpdate} title="Unpacked Items" items={this.state.items.filter( item => !item.packed)} />
        <Items itemsListUpdate = {this.itemsListUpdate} title="Packed Items" items={this.state.items.filter( item => item.packed)} />
        <button onClick={this.markAllUnpacked} className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }

   markAllUnpacked = () => {
      this.setState((state)=>{
          return {
              items:state.items.map(item => ({...item, packed:false}))
          };
      })
  };

    /**
     * Managing the Total Application State in the APP where I am maintaining the whole state . So We pass handler created in the App into Items Component
     * where another action listener is propagated into the Child Item Component which catches the event
     * @param itemUpdate : {type: string, itemID: string, itemName: string} has Payload and action type on the List
     *
     */
    itemsListUpdate = (itemUpdate = {type:'_NOACTION_',itemID :'', itemName :''}) => {
    switch(itemUpdate.type){
        case 'TOGGLE': {
            this.setState((state) => {
                return {
                    items: state.items.map(item => {
                        if (item.id === itemUpdate.itemID)
                            return {...item, packed: !item.packed};
                        else
                            return item;
                    })
                }
            });
            break;
        }
        case 'ADD': {
            this.setState((state)=>{
                return{
                    items:[...state.items,{value:itemUpdate.itemName, id:uniqueId() , packed:false}]
                }
            });
            break;
        }
        case 'REMOVE': {
            this.setState((state)=>{
                return {
                    items: state.items.filter(item => item.id !== itemUpdate.itemID)
                }
            });
            break;
        }
        default:
    }

    };

}

export default Application;
