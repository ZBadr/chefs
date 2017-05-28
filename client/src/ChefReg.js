import React from 'react';
import './ChefReg.css';


const ChefReg = () => (
  <div>
     <section className="main">
            <h2>Chef Registration</h2>
                <form action="/chefreg" method="POST">
                <textarea id = "textarea" name="firstName" placeholder="First Name"></textarea><br/>
                <textarea id = "textarea" name="lastName" placeholder="LastName"></textarea><br/>
                <textarea id = "textarea" name="email" placeholder="Email"></textarea><br/>
                <textarea id = "textarea" name="password" placeholder="Password"></textarea><br/>
                <textarea id = "textarea" name="passwordConfirmation" placeholder="Password Confirmation"></textarea><br/>
                <textarea id = "textarea" name="address" placeholder="Address"></textarea><br/>
                <textarea id = "textarea" name="phone" placeholder="Phone #"></textarea><br/>
                <textarea id = "cd" name="description" placeholder="Cooking background/description"></textarea><br/>
                <input id="submit" type="submit" />
                <p class="error"></p>
                </form>
        </section>
  </div>
)

export default ChefReg;