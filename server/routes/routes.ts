import * as express from 'express';
var routes = express.Router();
var middleware = require('./middleware/middleware');

//routes.use('/',middleware);
routes.get('/register', (request : express.Request, response: express.Response) => {
    response.json({ "message" : 'pagina general del api'});
});





module.exports = routes;