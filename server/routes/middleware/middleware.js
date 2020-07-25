

function loggerMiddleware(request,response,next) {
    console.log('llamasste al logger de get raiz');
    next();
  }


module.exports = loggerMiddleware;
