"use strict";

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');

module.exports = (knex) => {
  router.post("/", (req, res) => {
        knex
        .select("password")
        .from("users")
        .where('email', req.body.email)
        .then((result) => {
          if (result[0].password === req.body.password){
            let token = jwt.sign({email: req.body.email}, 'secret');
            res.send(token);
          }else{
            res.sendStatus(400);
          }
        });
  });
  return router;
}