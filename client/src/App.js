import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red300} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';


import './App.css';
import Footer from './Footer.js';
import Stepper from './Stepper.js';
import Home from './Home.js';
import LoginSignup from './LoginSignup.js';
import Recipe from './Recipe.js';
import Recipes2 from './Recipes2.js';
import Chef from './Chef.js';
import Chefs from './Chefs.js';
import CartList from './CartList.js';
import Users from './Users.js';
import ChefReg from './ChefReg.js';
import ChefsProfile from './ChefsProfile.js';
import OrderConfirmation from './OrderConfirmation.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red300,
    accent1Color: red300,
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cartItems: [],
      open: false,
      badgeContent: 0,
      authenticated: false,
      user: false,
      chef: false,
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleLogOut = () => {
    localStorage.clear();
    this.setState({user: false});
    this.setState({chef: false});
    /* eslint-disable no-restricted-globals */
      location.assign("/");
  }

  handleCartChange = (newCartItem) => {
    let newCart = this.state.cartItems.concat(newCartItem);
    this.setState({cartItems: newCart});
  }

  componentWillMount() {
    if(localStorage.Tokens){
      this.setState({authenticated: true});
    }else{
      this.setState({authenticated: false});
    }

    if (localStorage.User === "U"){
      this.setState({user: true});
    }else if(localStorage.User === "C"){
      this.setState({chef: true});
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <Router>
          <div>
            <AppBar className="appbar" title="Home Cooked" iconClassNameRight="appbar-logout"
            iconElementRight={this.state.authenticated ?  <MenuItem  onClick={this.handleLogOut}>Log Out</MenuItem> : null }
            iconElementLeft={<div>
            <Link className="appbar-link-login" to="/user">Log In & Sign Up</Link>
            <Link className="appbar-link-chefreg" to="/chefreg"> Chef Registration </Link>
            <Link className="appbar-link-home" to="/">Home </Link>
            { this.state.authenticated && this.state.chef ? null : <Link className="appbar-link-order" to = "/Stepper">Order </Link> }
            { this.state.authenticated && this.state.user ? <Link className="appbar-link-profile" to="/Users">Profile</Link> : null }
            { this.state.authenticated && this.state.chef ? <Link className="appbar-link-chefsprofile" to="/chefsprofile"> Chef Profile </Link> : null }
            </div>}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Stepper" component={() => <Stepper getCartItems={this.state.cartItems} changeCartItems={this.handleCartChange} />} />
            <Route path="/user" component={LoginSignup} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route exact path="/recipe" component={Recipes2}/>
            <Route path="/chef/:chefId" component={Chef} />
            <Route exact path="/chef" component={ChefsProfile}/>
            <Route path="/cart" component={() => <CartList cartItems={this.state.cartItems} />} />
            <Route path="/Users" component={() => <Users isUser={this.handleUserStatus} />} />
            <Route path="/ChefReg" component={ChefReg}/>
            <Route path="/chefsprofile" component={ChefsProfile}/>
            <Route path="/OrderConfirmation" component={OrderConfirmation}/>


            <Footer />


          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
