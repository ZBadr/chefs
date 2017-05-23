import React from 'react';
import './ChefReg.css';


const ChefReg = () => (
  <div>
     <section className="main">
            <h2>Chef Registration</h2>
                <form action="/chefreg" method="POST">
                <textarea id = "textarea" name="firstName" placeholder="First Name"></textarea>
                <textarea id = "textarea" name="lastName" placeholder="LastName"></textarea>
                <textarea id = "textarea" name="email" placeholder="Email"></textarea>
                <textarea id = "textarea" name="password" placeholder="Password"></textarea>
                <textarea id = "textarea" name="passwordConfirmation" placeholder="Password Confirmation"></textarea>
                <textarea id = "textarea" name="address" placeholder="Address"></textarea>
                <textarea id = "textarea" name="phone" placeholder="Phone #"></textarea>
                <textarea id = "cd" name="description" placeholder="Cooking background/description"></textarea>
                <input id="submit" type="submit" />
                <p class="error"></p>
                </form>
        </section>
  </div>
)

export default ChefReg;