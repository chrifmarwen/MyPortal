let express = require('express');
let routes = express.Router();
let users = require("./users");

/* GET home page. */
routes.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

routes.use('/users', users);

module.exports = routes;
