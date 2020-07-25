var express = require('express');
var routes = express.Router();

routes.get('/register', (request,response) => {
    response.status(200).json({ "message" : 'registro de usuario'});
});


module.exports = routes;