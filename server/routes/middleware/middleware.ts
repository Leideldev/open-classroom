import * as express from 'express';


function loggerMiddleware(request: express.Request, response: express.Response, next : any) {
    console.log('llamasste al logger de get raiz');
    next();
  }


module.exports = loggerMiddleware;