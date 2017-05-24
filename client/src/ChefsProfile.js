import React, { Component } from 'react';
import ChefsInfo from './ChefsInfo.js';
import Orderslist from './Orderslist.js';
import './ChefsProfile.css'

class ChefsProfile extends Component {

render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="main-page">Home </a>
        </nav>
        <ChefsInfo />
        <Orderslist />
      </div>
    );
  }

}

export default ChefsProfile;