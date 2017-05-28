import React, { Component } from 'react';
import Info from './info.js';
import Orderslist from './Orderslist.js';
import './Users.css';
class Users extends Component {

render() {
    return (
        <div>
          <Info />
          <Orderslist />
        </div>
    );
  }

}

export default Users;