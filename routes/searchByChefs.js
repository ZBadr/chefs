"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
  // select count(name) as count, name from recipes join recipe_ingredients on (id = "recipeID") where "ingredientID" IN (1 , 2, 3, 4, 5) group by "id" having count >= 3;
    let query = req.body.search.split(',');
    console.log(query)
    knex
      .select("id")
      .from("chefs")
      .whereIn("email", query)
      .then((result) => {
        return result.map(x => {return x.id});
        // console.log("query:",result)
      })
      .then((result) => {
        console.log("result:", result)
        knex
          .select("name")
          .from("recipes")
          .join("chef_recipes", 'id', 'recipeID')
          .where("chefID", "=", result[0])
          .then((dishes) => {
            console.log("res:", res)
            res.send(dishes);
            // res.send(`<html><body> ${result.map((x) => {return x.name})} </body></html>`);
          })
        })
        .catch((err) => { console.error(err); });
  });
return router;
}