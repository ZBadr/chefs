"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
router.get("/", (req, res) => {
  // select count(name) as count, name from recipes join recipe_ingredients on (id = "recipeID") where "ingredientID" IN (1 , 2, 3, 4, 5) group by "id" having count >= 3;
    // let query = req.query.search.split(',');
    // console.log('QUERY RECEIVED IN THE SERVER: ' + query);
    // knex
    //   .select("id")
    //   .from("ingredients")
    //   .whereIn("name", query)
    //   .then((result) => {
    //     return result.map(x => {return x.id});
    //     // console.log("query:",result)
    //   })
    //   .then((result) => {
    //     knex
    //       .count("name")
    //       .select("name","recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes")
    //       .from("recipes")
    //       .join("recipe_ingredients", 'id', 'recipeID')
    //       .whereIn("ingredientID", result)
    //       .groupBy("name","recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes")
    //       .having(knex.raw("count(name)"), "=", result.length)
    //       .then((dish) => {
    //         console.log('SEARCH RESULT IN THE SERVER BEFORE SENDING TO REACT: ' + dish);
    //         res.send(dish);
    //         // res.send(`<html><body> ${result.map((x) => {return x.name})} </body></html>`);
    //       })
    //     })
    //     .catch((err) => { console.error(err); });
  let query = req.query.search.split(',').map((x) => { return x.trim(); });
  let finalResult = {};

  console.log(query)
    knex
      .select("id")
      .from("recipes")
      .whereIn("name", query)
    .then(() => {
   let arr = [];
  for (let i = 0; i < query.length; i++) {
    arr.push(
      knex
      .select("id")
      .from("ingredients")
      .where("name", "~*", `.*${query[i]}.*`)
      )
    }
    return Promise.all(arr)
  })
    .then((result) => {
      let idArr = [].concat.apply([],result);
      idArr = idArr.map((x) => { return x.id; });
      let uniqueID = [];
      idArr.map( (x) => {
        if (uniqueID.indexOf(x) === -1) {
          uniqueID.push(x);
        }
      })
      console.log(idArr)
      return idArr
    })
    .then((result) => {
      console.log("result:", result)
      let a = knex
        .count("name")
        // .select("name", "id")
        .select("name as recipeName", "id", "recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes", "recipes.preparationTimeInMinutes")
        .from("recipes")
        .join("recipe_ingredients", 'id', 'recipeID')
        .whereIn("ingredientID", result)
        // .groupBy("name", "id");
        .groupBy("name", "id", "recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes")
      let b = knex
        .count("name")
        // .select("name", "id")
        .select("name as recipeName", "id", "recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes", "recipes.preparationTimeInMinutes")
        .from("recipes")
        .join("recipe_ingredients", 'id', 'recipeID')
        // .groupBy("name", "id");
        .groupBy("name", "id", "recipes.imageUrl", "recipes.cuisine", "recipes.cookingTimeInMinutes")

      return Promise.all([ a , b ]);
          }).then((result) => {
            console.log(result[0]);
            console.log(result[1]);
            let uniqueRecipe = result[0].map((x) => { return x.name });
            let allUniqueRecipe = result[1].map((x) => { return x.name });
            for (let i = 0; i < result[0].length; i++) {
              let currRecipe = uniqueRecipe[i]
              result[0][uniqueRecipe.indexOf(currRecipe)].numMissingIngredients = result[1][allUniqueRecipe.indexOf(currRecipe)].count - query.length
            }
            let sortFunc = function(a, b) {
              if (a.count > b.count) {
                return -1;
              }
              if (a.count < b.count) {
                return 1;
              }
              if (a.count === b.count) {
                if (a.numMissingIngredients > b.numMissingIngredients) {
                  return 1;
                }
                if (a.numMissingIngredients < b.numMissingIngredients) {
                  return -1;
                }
              }
              return 0;
            }
            finalResult = result[0].sort(sortFunc);
            return finalResult
            })
          .then((result) => {
            let arr = [];
            for (let i = 0; i < result.length; i++ ) {
              arr.push(
                knex
                  .select("name", "id")
                  .from("ingredients")
                  .join("recipe_ingredients", 'ingredients.id', 'ingredientID')
                  .where("recipeID", result[i].id)
              )
            }
            return Promise.all(arr);
          })
          .then ((result) => {
            console.log(result);
            console.log(finalResult)
            for (let i = 0; i < result.length; i++ ) {
              finalResult[i].ingredients = result[i].map((x) => { return x.name; })
            }
            return finalResult
          })
          .then((dish) => {
            console.log(dish)
            res.send(dish);
            })
      .catch((err) => { console.error(err); });
  });
return router;
}