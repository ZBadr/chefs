import React from 'react';
import './styles.css';


const LoginSignup = () => (
  <div>
     <main class="main">

        <section class="loginandsignup">

            <h2>Login</h2>
                <form action="/login" method="POST">
                <textarea id = "textarea" name="email" placeholder="Email"></textarea>
                <textarea id = "textarea" name="password" placeholder="Password"></textarea>
                <input id="submit" type="submit" />
                <p class="error"></p>
                </form>

        <div class="line"></div>

            <h2>Signup</h2>
                <form action="/login" method="POST">
                <textarea id = "textarea" name="firstName" placeholder="First Name"></textarea>
                <textarea id = "textarea" name="lastName" placeholder="LastName"></textarea>
                <textarea id = "textarea" name="email" placeholder="Email"></textarea>
                <textarea id = "textarea" name="password" placeholder="Password"></textarea>
                <textarea id = "textarea" name="passwordConfirmation" placeholder="Password Confirmation"></textarea>
                <textarea id = "textarea" name="address" placeholder="Address"></textarea>
                <textarea id = "textarea" name="phone" placeholder="Phone #"></textarea>
                <input id="submit" type="submit" />
                <p class="error"></p>
                </form>
        </section>

    </main>
  </div>
)

export default LoginSignup;