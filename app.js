var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = require('./lib/config/config.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  var cat = 'meow'
  res.render('home', { cat: cat });
});

app.get("/subscribed", function(req, res) {
  res.render('subscribed');
});

app.post("/", function(req, res) {
  var subscriber = {
    email: req.body.email
  }
  connection.connection.query('INSERT INTO subscribers SET ?', subscriber, function(error, results) {
    if (error) console.log(error.message);
    console.log(results);
  });
  res.render('home');
});

// app.post("/quote", function(req, res) {
app.post("/quote", function(req, res) {
  var customer = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    img_url: req.body.img_url,
    quote: req.body.quote
  }
  connection.connection.query('INSERT INTO customers SET ?', customer, function(error, results) {
    if (error) console.log(error.message);
    console.log(results);
  });
  res.render('quote');
});

app.listen(8080, function() {
  console.log('App listening on port 8080!');
});
