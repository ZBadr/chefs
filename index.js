require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const ENV         = process.env.ENV || "development";
const jwt = require('jsonwebtoken');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);

let loginRoute = require('./routes/login');
let signupRoute = require('./routes/signup');
let chefLoginRoute = require('./routes/cheflogin');
let chefSignupRoute = require('./routes/chefsignup');
let getProfileRoute = require('./routes/getProfile');
let searchByIngredients = require('./routes/searchByIngredients');
let searchByRecipes = require('./routes/searchByRecipes');
let searchByChefs = require('./routes/searchByChefs');
let findChefByRecipes = require('./routes/findChefByRecipes');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/login', loginRoute(knex));
app.use('/signup', signupRoute(knex));
app.use('/cheflogin', chefLoginRoute(knex));
app.use('/chefsignup', chefSignupRoute(knex));
app.use('/profile', getProfileRoute(knex));
app.use('/searchByIngredients', searchByIngredients(knex));
app.use('/searchByRecipes', searchByRecipes(knex));
app.use('/searchByChefs', searchByChefs(knex));
app.use('/findChefByRecipes', findChefByRecipes(knex));



// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
