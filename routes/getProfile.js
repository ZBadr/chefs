"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    let token = req.body.token;
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.sendStatus(400);
      }else{
        knex
        .select("firstName", "lastName", "email", "imageUrl", "address", "phoneNumber")
        .from("users")
        .where('email', user.email)
        .then((result) => {
          res.send(result);
        })
        .catch((error) => {
          console.error(error);
        })
      };
    })
  })
  return router;
}
