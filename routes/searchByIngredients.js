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
      .from("ingredients")
      .whereIn("name", query)
      .then((result) => {
        return result.map(x => {return x.id});
        // console.log("query:",result)
      })
      .then((result) => {
        knex
          .count("name")
          .select("name","recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes")
          .from("recipes")
          .join("recipe_ingredients", 'id', 'recipeID')
          .whereIn("ingredientID", result)
          .groupBy("name","recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes")
          .having(knex.raw("count(name)"), "=", result.length)
          .then((dish) => {
            console.log('SEARCH RESULT IN THE SERVER BEFORE SENDING TO REACT: ' + dish);
            res.send(dish);
            // res.send(`<html><body> ${result.map((x) => {return x.name})} </body></html>`);
          })
        })
        .catch((err) => { console.error(err); });
  });
return router;
}