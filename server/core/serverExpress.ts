import * as express from 'express';
var routes = require('../routes/routes');
var middleware = require('../routes/middleware/middleware');

export class ServerExpress{
    private server : express.Express ;
    private port : number;

    constructor(port : number){
        this.server = express.default();
        this.port = port;
    }

    public startServer() : void{
        
        this.addRoutes();
        this.server.listen(this.port,() => {
            console.log( `server started at http://localhost:${this.port}` );
        } );
   }

   private addRoutes() : void{
    this.server.use('/',routes);
   }

   private addMiddleware() : void{
    this.server.use(middleware);
   }

   
}