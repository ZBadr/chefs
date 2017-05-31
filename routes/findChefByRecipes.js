"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
router.get("/", (req, res) => {
  // select count(name) as count, name from recipes join recipe_ingredients on (id = "recipeID") where "ingredientID" IN (1 , 2, 3, 4, 5) group by "id" having count >= 3;
    let query = req.query.search.split(',');
    console.log('QUERY RECEIVED IN THE SERVER: ' + query);
    knex
      .select("id")
      .from("recipes")
      .whereIn("name", query)
      .then((result) => {
        return result.map(x => {return x.id});
        // console.log("query:",result)
      })
      .then((result) => {
        console.log("result:", result)
        knex
          .count("email")
          .select("email")
          .from("chefs")
          .join("chef_recipes", 'id', 'chefID')
          .whereIn("recipeID", result)
          .groupBy("email")
          .having(knex.raw("count(email)"), "=", result.length)
          .then((result) => {
            console.log("res:", res)
            res.send(result);
          })
        })
        .catch((err) => { console.error(err); });
  });
return router;
}