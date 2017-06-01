import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import Info from './info.js';
import Orderslist from './Orderslist.js';
import './Users.css';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state={
      redirect: false,
      user: {},
      showHello: true,
    }
  }

  componentWillMount () {
    if (localStorage.User === "C") {
        /* eslint-disable no-restricted-globals */
        location.assign('/chef');
    }

    if (!localStorage.Tokens){
      /* eslint-disable no-restricted-globals */
      location.assign("/user");
    }else{
      let oReq = new XMLHttpRequest(),
        method = "POST",
        url = "/profile";
      oReq.open(method, url);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      const self = this;
      oReq.onreadystatechange = function () {
        if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          console.log('RESULT OBJECT FROM THE SERVER BEFORE SETTING STATE: ' + oReq.responseText);
          self.setState({user: JSON.parse(oReq.responseText)});
        };
      };
      console.log(this.state.user[0]);
      // let jsonToken = localStorage.jwtToken.replace(/.$/, "");
      // console.log('trimmed token with U: ' + localStorage.jwtToken);
      // console.log('trimmed token without U: ' + jsonToken);
      oReq.send(`token=${localStorage.Tokens}`);
    }
  }

//     componentDidMount() {
//       this.showHello();
//     }
// showHello() {
//   setTimeout(() => {
//     this.setState({
//       showHello: false,
//     });
//   }, 1000);
// }
  render() {

    return (
      <div className="user-profile-page">
        <h1>Hello {this.state.user.firstName}!</h1>
        <Info email={this.state.user.email} address={this.state.user.address} phoneNumber={this.state.user.phoneNumber} />
        <Orderslist orderHistory={this.state.user.orderHistory} />
      </div>
    );
  }
}

export default Users;