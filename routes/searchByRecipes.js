"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {

    let query = req.query.search;
    query = query.split(" ").filter((x) => { return x !== ""; }).join(" ");
    console.log(query);
    let resultObj = {};
    knex
      .select("recipes.name as recipeName", "recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes", "recipes.preparationTimeInMinutes")
      .from("recipes")
      .where("recipes.name", "~*", `.*${query}.*`)
      .then((result) => {
          resultObj = result;
          console.log("users result:",resultObj)
      })
      .then(() => {
        knex
          .select("recipes.name as recipeName", "ingredients.name as ingredientName")
          .from("recipes")
          .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipeID")
          .join("ingredients", "ingredients.id", "recipe_ingredients.ingredientID")
          .where("recipes.name", "~*", `.*${query}.*`)
          .then((result) => {
            let recipesArr = resultObj.map((x) => { return x.recipeName; });
            for (let i = 0; i < resultObj.length; i++) {
              resultObj[i].ingredients = [];
            }
            for (let i = 0; i < result.length; i++ ) {
              resultObj[recipesArr.indexOf(result[i].recipeName)].ingredients.push(result[i].ingredientName)
            }
            console.log("users result:",result);
            res.send(resultObj);
        })
      })
      .catch((err) => { console.error(err); });



    // console.log('REQUEST QUERY SEARCH: ' + req.query.search);
    // let query = req.query.search;
    // query = query.split(" ").filter((x) => { return x !== ""; }).join(" ");
    // console.log('QUERY IN THE SERVER: ' + query);
    // knex
    //   .select("recipes.name as recipeName", "recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes", "recipes.preparationTimeInMinutes", "ingredients.name as ingredientName")
    //   .from("recipes")
    //   .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipeID")
    //   .join("ingredients", "ingredients.id", "recipe_ingredients.ingredientID")
    //   .where("recipes.name", "~*", `.*${query}.*`)
    //   .then((result) => {
    //     // console.log("recipe search result:",result)
    //     res.send(JSON.stringify(result));
    //   })
    //   .catch((err) => { res.sendStatus(400); });
    // select count(name) as count, name from recipes join recipe_ingredients on (id = "recipeID") where "ingredientID" IN (1 , 2, 3, 4, 5) group by "id" having count >= 3;
      // let query = req.body.search.split(',');
      // console.log('QUERY RECEIVED IN THE SERVER: ' + query);
      // knex
      //   .select("id")
      //   .from("recipes")
      //   .whereIn("name", query)
      //   .then((result) => {
      //     return result.map(x => {return x.id});
      //     // console.log("query:",result)
      //   })
      //   .then((result) => {
      //     console.log('SEARCH RESULT IN THE SERVER: ' + result);
      //     knex
      //       .count("email")
      //       .select("email")
      //       .from("chefs")
      //       .join("chef_recipes", 'id', 'chefID')
      //       .whereIn("recipeID", result)
      //       .groupBy("email")
      //       .having(knex.raw("count(email)"), "=", result.length)
      //       .then((chefEmail) => {
      //         console.log('SEARCH RESULT BEFORE SENDING TO REACT: ' + chefEmail);
      //         res.send(chefEmail);
      //         // res.send(`<html><body> ${result.map((x) => {return x.email})} </body></html>`);
      //       })
      //     })
      //     .catch((err) => { console.error(err); });
    });
return router;
}