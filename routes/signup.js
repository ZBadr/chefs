"use strict";

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');

module.exports = (knex) => {
  router.post("/", (req, res) => {
    console.log(req.body);
        knex('users')
        .insert({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          imageUrl: null,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber
        })
        .then((result) => {
            let token = jwt.sign({firstName: req.body.firstName, email: req.body.email}, 'secret');
            res.send(token);
        })
        .catch((error) => {
          console.error(error);
        })
  });
  return router;
}
