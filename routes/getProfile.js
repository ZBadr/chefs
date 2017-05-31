"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let token = req.body.token;
    let resultObj = {};
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.sendStatus(400);
      }else{
        knex
        .select("users.firstName", "users.lastName", "users.email", "users.phoneNumber", "users.imageUrl", "users.address")
        .from("users")
        .whereIn("users.email", user.email)
        .then((result) => {
          resultObj = result[0];
          console.log("users result:",resultObj)
          // res.send(`<html><body> ${JSON.stringify(result)} </body></html>`);
        })
        .then(() => {
          knex
            .select("orders.id as orderID", "orders.orderTotal", "chefs.firstName as chefFirstName", "chefs.lastName as chefLastName", "recipes.name as recipeName" )
            .from("users")
            .join("orders", "users.id", "orders.userID")
            .join("chefs", "orders.chefID", "chefs.id")
            .join("order_recipes", "orders.id", "order_recipes.orderID")
            .join("recipes", "order_recipes.recipeID", "recipes.id")
            .whereIn("users.email", user.email)
            .then((result) => {
              resultObj.orderHistory = result;
              console.log("users result:",resultObj);
              res.send(JSON.stringify(resultObj));
            })
            .catch((err) => { console.error(err); });
        })
      };
    })
  })
  return router;
}
