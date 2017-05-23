import React, { Component } from 'react';
import Info from './info.js';
import Orderslist from './Orderslist.js';
import './Users.css'

class Users extends Component {

render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="main-page">Home </a>
        </nav>
        <Info />
        <Orderslist />
      </div>
    );
  }

}

export default Users;