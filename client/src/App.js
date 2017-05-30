import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red200, red300} from 'material-ui/styles/colors';
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
      cartItems: [{name: "Young Chow Fried Rice", quantity: 1, price: 750}],
      open: false,
      badgeContent: 0,
      authenticated: false
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleLogOut = () => {
    localStorage.clear();
    /* eslint-disable no-restricted-globals */
      location.assign("/");
  }

  handleCartChange = (e) => {}

  componentWillMount() {
    if(localStorage.jwtToken){
      this.setState({authenticated: true});
    }else{
      this.setState({authenticated: false});
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <Router>
          <div>
            
            <AppBar className="appbar" title="Chefs 4 Hire" iconClassNameRight="appbar-cart" 
            iconElementRight={<Badge badgeContent={4} primary={true} ><NotificationsIcon /></Badge>} 
            iconElementLeft={<div><FlatButton label="Menu" onTouchTap={this.handleToggle}/>
            <Drawer openSecondary={true} open={this.state.open}>
              <AppBar title="Menu" />
              <MenuItem className="menulink"><Link to="/">Home</Link></MenuItem>
              <MenuItem class="menulink"><Link to = "/Stepper">Stepper</Link></MenuItem>
              {this.state.authenticated ? null : <MenuItem className="menulink"><Link to="/user">Log In/Sign Up</Link></MenuItem> }
              <MenuItem className="menulink"><Link to="/chefreg"> Chef Registration </Link></MenuItem>
              {this.state.authenticated ? <MenuItem className="menulink"><Link to="/Users">Profile</Link></MenuItem> : null }
              <MenuItem className="menulink"><Link to="/chefsprofile"> Chef Profile </Link></MenuItem>
              <MenuItem className="menulink"><Link to="/cart">Cart({this.state.cartItems.length})</Link></MenuItem>
              <MenuItem className="menulink" ><Link to="/OrderConfirmation"> Order Confirmation </Link></MenuItem>
              {this.state.authenticated ? <MenuItem className="menulink" onClick={this.handleLogOut}>Log Out</MenuItem> : null}
            </Drawer></div>}/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/Stepper" component={Stepper}/>
            <Route path="/user" component={LoginSignup}/>
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route exact path="/recipe" component={Recipes2}/>
            <Route path="/chef/:chefId" component={Chef} />
            <Route exact path="/chef" component={Chefs}/>
            <Route path="/cart" component={() => <CartList cartItems={this.state.cartItems} changeCartItems={this.handleCartChange}/>} />
            <Route path="/Users" component={Users} />
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
