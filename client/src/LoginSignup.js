import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginSignup.css';



class LoginSignup extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        let oReq = new XMLHttpRequest();
        oReq.open("post", )



        let payload = new FormData(document.getElementById("login-form"));
        console.log(payload);
        fetch('/login', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: payload
        }).then((res) => {
          // console.log(res);
          if (res.status === 200) {
            return <Redirect to="/user"/>
          }
        }).catch(err => console.error(err));
    }
    render(){
        return(
            <div>
             <main className="mainlogin">

                <section className="loginandsignup">

                    <h2>Login</h2>
                        <form id="login-form" onSubmit={this.handleFormSubmit}>
                            <div>
                            <label>Email:</label>
                            <input type="email" name="email"/><br/>
                            </div>
                            <div>
                            <label>Password:</label>
                            <input type="password" name="password"/>
                            </div>
                            <div>
                            <input type="submit" value="Submit"/>
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