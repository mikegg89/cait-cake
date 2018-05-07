var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  var cat = 'meow'
  res.render('home', { cat: cat });
});

app.post("/register", function(req, res) {
  console.log(req, res);
});

app.listen(8080, function() {
  console.log('App listening on port 8080!');
});
