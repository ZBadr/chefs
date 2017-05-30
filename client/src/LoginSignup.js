import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './LoginSignup.css';
import validator from 'validator';

class LoginSignup extends Component {

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
       emptySignupAddress: false,
       emptySignupPhoneNumber: false,
       emptyLoginEmail: false,
       emptySignupEmail: false,
     };
    }

    handleLogin = (e) => {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        if (!validator.isEmail(email) || validator.isEmpty(email)) {
            return this.setState({emptyLoginEmail: true});
        }
        if(password.trim() === "") {
            return this.setState({emptyLoginPassword: true});
        }else{
            let oReq = new XMLHttpRequest(),
                method = "POST",
                url = "/login";
            oReq.open(method, url);
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const self=this;
            oReq.onreadystatechange = function () {
              if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                localStorage.setItem('jwtToken', oReq.responseText);
                /* eslint-disable no-restricted-globals */
                location.assign('/Users');
              }else if (oReq.responseText === 'Bad Request'){
                return self.setState({loginError: true});
              }
            };
            oReq.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
        }
    }

    handleSignup = (e) => {
        e.preventDefault();
        let first_name = document.getElementById('signup-firstName').value;
        let last_name = document.getElementById('signup-lastName').value;
        let email = document.getElementById('signup-email').value;
        let password = document.getElementById('signup-password').value;
        let passwordConf = document.getElementById('signup-password-conf').value;
        let address = document.getElementById('signup-address').value;
        let phoneNumber = document.getElementById('signup-phoneNumber').value;

        if(validator.isEmpty(first_name) || first_name.replace(/\W/g, "") === "") {
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
        if(validator.isEmpty(address)) {
            return this.setState({emptySignupAddress: true});
        }
        if(!validator.isNumeric(phoneNumber) || validator.isEmpty(phoneNumber)) {
            return this.setState({emptySignupPhoneNumber: true});
        }
        if (password !== passwordConf){
            return this.setState({PwMismatch: true});
        }else{
            let oReq = new XMLHttpRequest(),
                method = "POST",
                url = "/signup";
            oReq.open(method, url);
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            const self = this;
            oReq.onreadystatechange = function () {
              if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                localStorage.setItem('jwtToken', oReq.responseText);
                 /*eslint-disable no-restricted-globals*/
                location.assign('/Users');
              }else if(oReq.responseText === 'Bad Request'){
                return self.setState({signupError: true});
              }
            };
            oReq.send(`firstName=${encodeURIComponent(first_name)}&lastName=${encodeURIComponent(last_name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&address=${encodeURIComponent(address)}&phoneNumber=${encodeURIComponent(phoneNumber)}`);
        }
    }


    render(){
        return(
            <div>
             <main className="mainlogin">
                <section className="loginandsignup">
                    <h2>Login</h2>
                        <h7>{this.state.loginError ? "Invalid login" : null}</h7>
                        <form id="login-form" onSubmit={this.handleLogin} >
                            <div>
                            <h8>{this.state.emptyLoginEmail ? "This field cannot be empty" : null}</h8>
                            <label>Email:</label>
                            <input type="email" name="email" id="login-email" /><br/>
                            </div>
                            <div>
                            <h8>{this.state.emptyLoginPassword ? "This field cannot be empty" : null}</h8>
                            <label>Password:</label>
                            <input type="password" name="password" id="login-password"/>
                            </div>
                            <div>
                            <input type="submit" value="Submit" />
                            </div>
                        </form>

                <div className="line"></div>

                    <h2>Sign Up</h2>
                    <h5>{this.state.signupError ? "User already exists!" : null}</h5>
                        <form id="signup-form" onSubmit={this.handleSignup} >
                            <div>
                                <h8>{this.state.emptySignupFirstName ? "Invalid Entry" : null}</h8>
                                <label>First Name:</label>
                                <input type="text" name="firstName" id="signup-firstName"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupLastName ? "Invalid Entry" : null}</h8>
                                <label>Last Name:</label>
                                <input type="text" name="lastName" id="signup-lastName"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupEmail ? "Invalid Entry" : null}</h8>
                                <label>Email:</label>
                                <input type="email" name="email" id="signup-email"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupPassword ? "Invalid Entry" : null}</h8>
                                <label>Password:</label>
                                <input type="password" name="password" id="signup-password"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.PwMismatch ? "Password mismatch" : null}</h8>
                                <label>Retype Password:</label>
                                <input type="password" name="passwordConfirmation" id="signup-password-conf" />
                            </div>
                            <div>
                                <h8>{this.state.emptySignupAddress ? "Invalid Entry" : null}</h8>
                                <label>Address:</label>
                                <input type="text" name="address" id="signup-address"/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupPhoneNumber ? "Invalid Entry" : null}</h8>
                                <label>Phone Number:</label>
                                <input type="text" name="phoneNumber" id="signup-phoneNumber" />
                            </div>
                            <div>
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                </section>
                </main>
            </div>
        )
    }
}
export default LoginSignup;