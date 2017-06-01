import React, { Component } from 'react';
import './ChefReg.css';
import validator from 'validator';


class ChefReg extends Component {

    constructor(props){
        super(props);
        this.state = {
            PwMismatch: false,
           signupError: false,
           loginError: false,
           redirect: false,
           emptyLoginPassword: false,
           emptySignupPassword: false,
           emptySignupFirstName: false,
           emptySignupLastName: false,
           emptyChefHourlyRate: false,
           emptySignupPhoneNumber: false,
           emptyLoginEmail: false,
           emptySignupEmail: false,
           emptyChefDescription: false
        }
    }

    componentWillMount() {
        if(localStorage.User === "U") {
            /* eslint-disable no-restricted-globals */
            location.assign('/user');
        }
        if(localStorage.User === "C"){
            /* eslint-disable no-restricted-globals */
            location.assign('/chef');
        }
    }

    handleChefLogin = (e) => {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        if (!validator.isEmail(email) || validator.isEmpty(email)) {
            return this.setState({emptyLoginEmail: true});
        }
        if(validator.isEmpty(password)) {
            return this.setState({emptyLoginPassword: true});
        }else{
            let oReq = new XMLHttpRequest(),
                method = "POST",
                url = "/cheflogin";
            oReq.open(method, url);
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const self=this;
            oReq.onreadystatechange = function () {
              if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                let resObj = JSON.parse(oReq.responseText);
                localStorage.setItem('Tokens', resObj.jwtToken);
                localStorage.setItem('User', resObj.user);
                /* eslint-disable no-restricted-globals */
                location.assign('/chef');
              }else if (oReq.status === 400){
                return self.setState({loginError: true});
              }
            };
            oReq.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
        }
    }

    handleChefSignup = (e) => {
        e.preventDefault();
        let first_name = document.getElementById('chefFirstName').value;
        let last_name = document.getElementById('chefLastName').value;
        let email = document.getElementById('chefEmail').value;
        let password = document.getElementById('chefPassword').value;
        let passwordConf = document.getElementById('chefPasswordConf').value;
        let hourlyRate = document.getElementById('chefHourlyRate').value;
        let phoneNumber = document.getElementById('chefPhoneNumber').value;
        let description = document.getElementById('chefDescription').value;

        if(validator.isEmpty(first_name)) {
            return this.setState({emptySignupFirstName: true});
        }
        if(validator.isEmpty(last_name)) {
            return this.setState({emptySignupLastName: true});
        }
        if(!validator.isEmail(email)) {
            return this.setState({emptySignupEmail: true});
        }
        if (validator.isEmpty(password)) {
            return this.setState({emptySignupPassword: true});
        }
        if(validator.isEmpty(hourlyRate)) {
            return this.setState({emptyChefHourlyRate: true});
        }
        if(!validator.isNumeric(phoneNumber) || validator.isEmpty(phoneNumber)) {
            return this.setState({emptySignupPhoneNumber: true});
        }
        if (password !== passwordConf){
            return this.setState({PwMismatch: true});
        }else{
            let oReq = new XMLHttpRequest(),
                method = "POST",
                url = "/chefsignup";
            oReq.open(method, url);
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const self = this;
            oReq.onreadystatechange = function () {
              if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                let resObj = JSON.parse(oReq.responseText);
                localStorage.setItem('Tokens', resObj.jwtToken);
                localStorage.setItem('User', resObj.user);
                 /*eslint-disable no-restricted-globals*/
                location.assign('/chef');
              }else if(oReq.status === 400){
                return self.setState({signupError: true});
              }
            };
            oReq.send(`firstName=${encodeURIComponent(first_name)}&lastName=${encodeURIComponent(last_name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&hourlyRateInCents=${encodeURIComponent(hourlyRate)}&phoneNumber=${encodeURIComponent(phoneNumber)}&description=${encodeURIComponent(description)}`);
        }
    }

  render(){
    return(
      <div className="chefregpage">
         <section className="main">
                <h2>Chef Login</h2>
                    <h7>{this.state.loginError ? "Invalid login" : null}</h7>
                    <form id="login-form" onSubmit={this.handleChefLogin} >
                        <h8>{this.state.emptyLoginEmail ? "This field cannot be empty" : null}</h8>
                        <input type="email" name="email" id="login-email" placeholder="Email" /><br/>
                        <h8>{this.state.emptyLoginPassword ? "This field cannot be empty" : null}</h8>
                        <input type="password" name="password" id="login-password" placeholder="Password"/>
                        <div>
                        <input type="submit" value="Submit" />
                        </div>
                    </form>

                <h2>Chef Registration</h2>
                    <form action="/chefreg" onSubmit={this.handleChefSignup}>
                    <h8>{this.state.emptySignupFirstName ? "Invalid Entry" : null}</h8>
                    <input id="chefFirstName" type = "textarea" name="firstName" placeholder="First Name"></input><br/>
                    <h8>{this.state.emptySignupLastName ? "Invalid Entry" : null}</h8>
                    <input id="chefLastName" type = "textarea" name="lastName" placeholder="Last Name"></input><br/>
                    <h8>{this.state.emptySignupEmail ? "Invalid Entry" : null}</h8>
                    <input id="chefEmail" type = "email" name="email" placeholder="Email"></input><br/>
                    <h8>{this.state.emptySignupPassword ? "Invalid Entry" : null}</h8>
                    <input id="chefPassword" type = "password" name="password" placeholder="Password"></input><br/>
                    <h8>{this.state.PwMismatch ? "Password mismatch" : null}</h8>
                    <input id="chefPasswordConf" type = "password" name="passwordConfirmation" placeholder="Password Confirmation"></input><br/>
                    <h8>{this.state.emptySignupPhoneNumber ? "Invalid Entry" : null}</h8>
                    <input id="chefPhoneNumber" type = "textarea" name="phone" placeholder="Phone #"></input><br/>
                    <h8>{this.state.emptyChefDescription ? "Invalid Entry" : null}</h8>
                    <input id="chefDescription" type = "textarea" name="description" placeholder="Cooking background/description"></input><br/>
                    <h8>{this.state.emptyChefHourlyRate ? "Invalid Entry" : null}</h8>
                    <input id="chefHourlyRate" type = "textarea" name="phone" placeholder="Hourly Rate"></input><br/>
                    <input id="submit" type="submit" />
                    <p class="error"></p>
                    </form>
            </section>
      </div>
  )
}
}

export default ChefReg;