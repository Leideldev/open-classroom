var express = require("express");
var routes = express.Router();

//routes.use('/',middleware);
routes.get('/', function(req, res) {
    res.send('youre in /');
  });
routes.use("/users",require("./users"));





module.exports = routes;
