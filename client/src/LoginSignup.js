import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginSignup.css';

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
       emptyAddress: false,
       emptyPhoneNumber: false,
       emptyLoginEmail: false,
       emptySignupEmail: false,
     };
    }

    handleLogin = (e) => {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        if (email.trim() === "") {
            return this.setState({emptyLoginEmail: true});
        }else if(password.trim() === "") {
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
        if (password.trim() === "") {
            return this.setState({emptySignupPassword: true});
        }else if(email.trim() === "") {
            return this.setState({emptySignupEmail: true});
        }else if(address.trim() === "") {
            return this.setState({emptySignupAddress: true});
        }else if(phoneNumber.trim() === "") {
            return this.setState({emptySignupPhoneNumber: true});
        }else if(first_name.trim() === "") {
            return this.setState({emptySignupFirstName: true});
        }else if(last_name.trim() === "") {
            return this.setState({emptySignupLastName: true});
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
            /* eslint-disable no-restricted-globals */
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
                                <h8>{this.state.emptySignupFirstName ? "This field cannot be empty" : null}</h8>
                                <label>First Name:</label>
                                <input type="text" name="firstName" id="signup-firstName"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupLastName ? "This field cannot be empty" : null}</h8>
                                <label>Last Name:</label>
                                <input type="text" name="lastName" id="signup-lastName"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupEmail ? "This field cannot be empty" : null}</h8>
                                <label>Email:</label>
                                <input type="email" name="email" id="signup-email"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignupPassword ? "This field cannot be empty" : null}</h8>
                                <label>Password:</label>
                                <input type="password" name="password" id="signup-password"/><br/>
                            </div>
                            <div>
                                <h8>{this.state.PwMismatch ? "Password mismatch" : null}</h8>
                                <label>Retype Password:</label>
                                <input type="password" name="passwordConfirmation" id="signup-password-conf" />
                            </div>
                            <div>
                                <h8>{this.state.emptySignupAddress ? "This field cannot be empty" : null}</h8>
                                <label>Address:</label>
                                <input type="text" name="address" id="signup-address"/>
                            </div>
                            <div>
                                <h8>{this.state.emptySignUpPhoneNumber ? "This field cannot be empty" : null}</h8>
                                <label>Phone Number:</label>
                                <input type="text" name="phoneNumber" id="signup-phoneNumber"/>
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