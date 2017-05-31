"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {
    // select count(name) as count, name from recipes join recipe_ingredients on (id = "recipeID") where "ingredientID" IN (1 , 2, 3, 4, 5) group by "id" having count >= 3;
      let query = req.body.search.split(',');
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
          console.log('SEARCH RESULT IN THE SERVER: ' + result);
          knex
            .count("email")
            .select("email")
            .from("chefs")
            .join("chef_recipes", 'id', 'chefID')
            .whereIn("recipeID", result)
            .groupBy("email")
            .having(knex.raw("count(email)"), "=", result.length)
            .then((chefEmail) => {
              console.log('SEARCH RESULT BEFORE SENDING TO REACT: ' + chefEmail);
              res.send(chefEmail);
              // res.send(`<html><body> ${result.map((x) => {return x.email})} </body></html>`);
            })
          })
          .catch((err) => { console.error(err); });
    });
return router;
}