import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginSignup.css';

class LoginSignup extends Component {

    handleFormSubmit = (e) => {
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

    render(){
        return(
            <div>
             <main className="mainlogin">
                <section className="loginandsignup">
                    <h2>Login</h2>
                        <form id="login-form" onSubmit={this.handleFormSubmit} enctype="application/x-www-form-urlencoded">
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
                        <form action="http://localhost:3000/signup" method="POST">
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="firstName"/><br/>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="lastName"/><br/>
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="email" name="email"/><br/>
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" name="password"/><br/>
                            </div>
                            <div>
                                <label>Retype Password:</label>
                                <input type="password" name="passwordConfirmation"/>
                            </div>
                            <div>
                                <label>Address:</label>
                                <input type="text" name="address"/>
                            </div>
                            <div>
                                <label>Phone Number:</label>
                                <input type="text" name="phoneNumber"/>
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