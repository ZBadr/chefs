import React, { Component } from 'react';
import {
  Redirect,
  Link
} from 'react-router-dom'




class Home extends Component {

  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   let payload = new FormData(document.getElementById("login-form"));
  //   console.log(payload);
  //   fetch('/login', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: payload
  //   }).then((res) => {
  //     // console.log(res);
  //     if (res.status === 200) {
  //       return <Redirect to="/user"/>
  //     }
  //   }).catch(err => console.error(err));
  // }

  // handlePingClick = (e) => {
  //   e.preventDefault();
  //   let payload = {
  //     email: "johnsmith@gmail.com",
  //     password: "johnsmith"
  //   }
  //   console.log(JSON.stringify(payload));
  //   fetch('/login', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: 'email=johnsmith%40gmail.com&password=johnsmith'
  //   }).then((res) => {
  //     // console.log(res);
  //     if (res.status === 200) {
  //       return <Redirect to="/user" />
  //     }
  //   }).catch(err => console.error(err));
  // }
  render() {
    return (
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
    );
  }
}

export default Home;