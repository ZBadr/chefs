"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {
  router.post("/", (req, res) => {
        knex
        .select("password", "firstName")
        .from("chefs")
        .where('email', req.body.email)
        .then((result, err) => {
          if (err){
            res.sendStatus(400);
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
                res.send(token);
              }else{
                console.log('Password INVALID');
                res.sendStatus(400);
              }
            });
          }
        });
  });
  return router;
}
