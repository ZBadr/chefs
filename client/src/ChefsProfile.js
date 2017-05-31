import React, { Component } from 'react';
import ChefsInfo from './ChefsInfo.js';
import Orderslist from './Orderslist.js';
import './ChefsProfile.css';

class ChefsProfile extends Component {

render() {
    return (
      <div className="chef-profile-page">
        <ChefsInfo />
        <Orderslist />
      </div>
    );
  }

}

export default ChefsProfile;