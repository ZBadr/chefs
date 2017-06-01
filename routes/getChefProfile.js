"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let token = req.body.token;
    console.log('in /getprofile:' + token);
    let resultObj = {};
    jwt.verify(token, process.env.JWT_SECRET, (err, chef) => {
      if (err) {
        res.sendStatus(400);
      }else{
        knex
        .select("chefs.firstName", "chefs.lastName", "chefs.email", "chefs.phoneNumber", "chefs.imageUrl", "chefs.description", "chefs.hourlyRateInCents")
        .from("chefs")
        .whereIn("chefs.email", chef.email)
        .then((result) => {
          resultObj = result[0];
          console.log("users result:",resultObj)
          // res.send(`<html><body> ${JSON.stringify(result)} </body></html>`);
        })
        .then(() => {
          knex
            .select("orders.id as orderID", "orders.orderTotal", "users.firstName as userFirstName", "users.lastName as userLastName", "recipes.name as recipeName" )
            .from("chefs")
            .join("orders", "chefs.id", "orders.chefID")
            .join("users", "orders.userID", "users.id")
            .join("order_recipes", "orders.id", "order_recipes.orderID")
            .join("recipes", "order_recipes.recipeID", "recipes.id")
            .whereIn("chefs.email", chef.email)
            .then((result) => {
              resultObj.orderHistory = result;
              console.log("chefs result:",resultObj);
              res.send(JSON.stringify(resultObj));
            })
            .catch((err) => { console.error(err); });
        })
      };
    })
  })
  return router;
}
