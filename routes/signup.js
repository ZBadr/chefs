"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {
  router.post("/", (req, res) => {
    console.log('REQUEST BODY JUST ENTERING THE SERVER: ');
    console.log(req.body);
      knex('users')
        .max('id')
        .then( (x) => {
          knex('users')
          .insert({
            id: x[0].max + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, saltRounds),
            imageUrl: null,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            stripeToken: null
          })
        .then((result, err) => {
          if (err){
            console.log('SIGN UP ERROR');
            res.sendStatus(400)
          }
          let token = jwt.sign(
            {
              firstName: req.body.firstName,
              email: req.body.email
            },
            process.env.JWT_SECRET,
            {expiresIn: 60 * 60 * 24}
          );
          res.send(JSON.stringify({jwtToken: token, user: "U"}));
        })
        // .catch((error) => {
        //   console.log('CAUGHT ERROR');
        //   res.sendStatus(400);
        // })
    })
  });
  return router;
}
