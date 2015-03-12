var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  res.render('index.html');
});
app.listen(5000);
