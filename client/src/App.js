import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import './Users.css';
import Home from './Home.js';
import LoginSignup from './LoginSignup.js';
import Recipe from './Recipe.js';
import Recipes from './Recipes.js';
import Chef from './Chef.js';
import Chefs from './Chefs.js';
import CartList from './CartList.js';
import Users from './Users.js';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems: [{name: "Young Chow Fried Rice", quantity: 1, price: 750}]
    };
    // this.socket = new WebSocket("ws://localhost:3001");
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar">
              <span id="logo"><Link to = "/"><h1>Home Cooked</h1></Link></span>
              <span className="nav-links"><Link to = "/user">Log In/Sign Up</Link></span>
              <span className="nav-cart"><Link to="/cart">Cart({this.state.cartItems.length})</Link></span>
              <span className="nav-profile"><Link to="/Users">Profile</Link></span>
            </nav>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={LoginSignup}/>
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route exact path="/recipe" component={Recipes}/>
            <Route path="/chef/:chefId" component={Chef} />
            <Route exact path="/chef" component={Chefs}/>
            <Route path="/cart" component={() => <CartList cartItems={this.state.cartItems} />} />
            <Route path="/Users" component={Users}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
