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

  componentWillMount() { //Checks credential before page is rendered
    if (!localStorage.jwtToken){
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
            let resObj = JSON.parse(oReq.responseText);
            self.setState({user: resObj[0]});
          }
        };
        console.log(this.state.user[0]);
        oReq.send(`token=${localStorage.jwtToken}`);
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
            <Info />
            <Orderslist />
          </div>
      );
    }

}

export default Users;