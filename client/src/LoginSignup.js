import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginSignup.css';

class LoginSignup extends Component {

    constructor(props){
     super(props);
     this.state = {
       address: '',
       PwMismatch: false
     };
    }

    handleLogin = (e) => {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        let oReq = new XMLHttpRequest(),
            method = "POST",
            url = "/login";
        oReq.open(method, url);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.onreadystatechange = function () {
          if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            console.log(oReq.responseText);
          }
        };

        oReq.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
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

        if (password !== passwordConf){
            return this.setState({PwMismatch: true});
        }else{
            let oReq = new XMLHttpRequest(),
            method = "POST",
            url = "/signup";
            oReq.open(method, url);
            oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            oReq.onreadystatechange = function () {
              if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
                console.log(oReq.responseText);
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
                        <form id="login-form" onSubmit={this.handleLogin} enctype="application/x-www-form-urlencoded">
                            <div>
                            <label>Email:</label>
                            <input type="email" name="email" id="login-email"/><br/>
                            </div>
                            <div>
                            <label>Password:</label>
                            <input type="password" name="password" id="login-password"/>
                            </div>
                            <div>
                            <input type="submit" value="Submit" />
                            </div>
                        </form>

                <div className="line"></div>

                    <h2>Sign Up</h2>
                        <form id="signup-form" onSubmit={this.handleSignup} enctype="application/x-www-form-urlencoded">
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="firstName" id="signup-firstName"/><br/>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="lastName" id="signup-lastName"/><br/>
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="email" name="email" id="signup-email"/><br/>
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" name="password" id="signup-password"/><br/>
                            </div>
                            <div>
                                {this.state.PwMismatch ? <h7>Passwords don't match</h7> : null}
                                <label>Retype Password:</label>
                                <input type="password" name="passwordConfirmation" id="signup-password-conf" />
                            </div>
                            <div>
                                <label>Address:</label>
                                <input type="text" name="address" id="signup-address"/>
                            </div>
                            <div>
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