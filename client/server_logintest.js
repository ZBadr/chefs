var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.

passport.use('local', new Strategy( {
    usernameField: 'email'
  },
  function(username, password, cb) {
    console.log(username, password);
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password !== password) { return cb(null, false); }
      return cb(null, user);
  });
}));

passport.use('local-signup', new Strategy({
    usernameField : 'email',
    passReqToCallback: true
  },
  function(req, username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      // console.log("from passport local signup", req.body)
      if (err) { return cb(err); }
      // reminder, password not encrypted yet
      if (req.body.password !== req.body.passwordConfirmation) {
        console.log("password not confirmed!")
        return cb(null, false);
      }
      if (!user) {
        console.log("adding new user!")
        db.users.addUser(req, function(err) {
          if (err) { return cb(err); }
          console.log("new user added, loggin in")
          db.user.findByUsername(username, function(err, user) {
            if (err) { return cb(err); }
            return cb(null, user)
          });
        });
      };
    });
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

// Create a new Express application.
var app = express();

// Configure view engine to render EJS templates.
app.set('views', __dirname + 'public');
app.set('view engine', 'ejs');

// The express.static built-in middleware in Express
// The code below allows serving the files in "views" directly as static files
// so that the css files and image files can be accessed by the .ejs files.
app.use(express.static("public"));

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());
// app.use("/api");

// Define routes.

app.get('/', (req, res) => {
    res.redirect('http://localhost:3000/');
  });

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000/Users');
  });

app.post('/signup',
  passport.authenticate('local-signup', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000/Users');
  });

app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

app.get('/Users',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('Users', { user: req.user });
  });

app.get('/ping', function(req, res) {
  res.send("pong");
});
app.listen(3001);
