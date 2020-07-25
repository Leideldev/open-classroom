var express = require("express");
var routes = require('../routes/routes');
var middleware = require('../routes/middleware/middleware');

class ServerExpress{
     #server;
     port;

    constructor(port){
        this.#server = express();
        this.port = port;
    }
    

     startServer(){
        
        this.addRoutes();
        this.#server.listen(this.port,() => {
            console.log( `server started at http://localhost:${this.port}` );
        } );
   }

    addRoutes(){
    this.#server.use('/',routes);
   }

    addMiddleware(){
    this.#server.use(middleware);
   }

   
}

module.exports = ServerExpress;