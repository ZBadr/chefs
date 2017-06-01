"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {
  router.post("/", (req, res) => {
    console.log('REQUEST BODY JUST ENTERING THE SERVER: ' + req.body.password);
        knex
        .select("password", "firstName")
        .from("users")
        .where('email', req.body.email)
        .then((result, error) => {
          if(error){
            return res.sendStatus(400);
          }else{
            bcrypt.compare(req.body.password, result[0].password, (err, valid) => {
              if (err) {
                console.log("Error in bcrypt");
                throw err;
              }else if(valid){
                console.log('Password VALID');
                let token = jwt.sign(
                  {
                    firstName: result[0].firstName,
                    email: req.body.email
                  },
                  process.env.JWT_SECRET,
                  {expiresIn: 60 * 60 * 24}
                );
                res.send(JSON.stringify({jwtToken: token, user: "U"}));
              }else{
                console.log('Password INVALID');
                res.status(400);
                res.send('PASSWORD INVALID');
              }
            })
          }
        })
        .catch((error) => {
          console.log('Login error:' + error);
          res.sendStatus(400);
        })

  });
  return router;
}
