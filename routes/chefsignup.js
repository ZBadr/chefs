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
        knex('chefs')
        .insert({
          id: 52,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, saltRounds),
          imageUrl: null,
          description: req.body.description,
          phoneNumber: req.body.phoneNumber,
          hourlyRateInCents: req.body.hourlyRateInCents
        })
        .then((result) => {
          let token = jwt.sign(
            {
              firstName: req.body.firstName,
              email: req.body.email
            },
            process.env.JWT_SECRET,
            {expiresIn: 60 * 60 * 24}
          );
          res.send(JSON.stringify({jwtToken: token, user: "C"}));
        })
        // .catch((error) => {
        //   res.sendStatus(400);
        // })
  });
  return router;
}
