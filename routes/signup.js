"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {
  router.post("/", (req, res) => {
    console.log(req.body);
        knex('users')
        .insert({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, saltRounds),
          imageUrl: null,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber
        })
        .then(() => {
          let token = jwt.sign(
            {
              firstName: req.body.firstName,
              email: req.body.email
            },
            process.env.JWT_SECRET,
            {expiresIn: 60 * 60 * 24}
          );
          res.send(token);
        })
        .catch((error) => {
          res.sendStatus(400);
        })
  });
  return router;
}
