import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div className="Home">

          <form>
            <input type="textarea" className="search" placeholder="Search by recipe" />
            <input type="submit" value="Search" />
          </form>

          Featured Recipes
          <div>
            <Link to = {"recipe/youngchowfriedrice"}>
              Young Chow Fried Rice
            </Link>
          </div>
          <div>
            <Link to = {"recipe/filetmignon"}>
              Filet Mignon
            </Link>
          </div>
          <div>
            <Link to = {"recipe/foiegrasburger"}>
              Foie gras Burger
            </Link>
          </div>
          <Link to = {"/recipe"}>
            <h5>more recipes</h5>
          </Link>

          <form>
            <input type="textarea" className="search" placeholder="Search by chef" />
            <input type="submit" value="Search" />
          </form>

          Featured Chefs
          <div>
            <Link to = {"chef/gordonramsay"}>
              Gordon Ramsay
            </Link>
          </div>
          <div>
            <Link to = {"chef/jamieoliver"}>
              Jamie Oliver
            </Link>
          </div>
          <div>
            <Link to = {"chef/susurlee"}>
              Susur Lee
            </Link>
          </div>
          <Link to = "/chef">
            <h5>more chefs</h5>
          </Link>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;