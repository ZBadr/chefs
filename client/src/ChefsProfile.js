import React, { Component } from 'react';
import ChefsInfo from './ChefsInfo.js';
import Orderslist from './Orderslist.js';
import './ChefsProfile.css';

class ChefsProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      redirect: false,
      chef: {},
      showHello: true,
    }
  }

  componentWillMount () {

    if (localStorage.User === "U") {
        /* eslint-disable no-restricted-globals */
        location.assign('/Users');
    }

    if (!localStorage.Tokens){
      /* eslint-disable no-restricted-globals */
      location.assign("/chefreg");
    }else{
      let oReq = new XMLHttpRequest(),
        method = "POST",
        url = "/chefprofile";
      oReq.open(method, url);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      const self = this;
      oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          console.log('RESULT OBJECT FROM THE SERVER BEFORE SETTING STATE: ' + oReq.responseText);
          self.setState({chef: JSON.parse(oReq.responseText)});
          console.log(JSON.parse(oReq.responseText).orderHistory[0].recipeName);
        };
      };
      console.log(this.state.chef.firstName);
      // let jsonToken = localStorage.jwtToken.replace(/.$/, "");
      // console.log('trimmed token with U: ' + localStorage.jwtToken);
      // console.log('trimmed token without U: ' + jsonToken);
      oReq.send(`token=${localStorage.Tokens}`);
    }
  }

render() {
    return (
      <div className="chef-profile-page">
        <h1>Hello {this.state.chef.firstName}!</h1>
        <ChefsInfo firstName={this.state.chef.firstName} email={this.state.chef.email} address={this.state.chef.address} phoneNumber={this.state.chef.phoneNumber} hourlyRate={this.state.chef.hourlyRateInCents} description={this.state.chef.description}/>
        <Orderslist pastOrders={this.state.chef.orderHistory} />

      </div>
    );
  }

}

export default ChefsProfile;