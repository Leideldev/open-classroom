let ServerExpress = require("./core/serverExpress"); 
let Database = require("./core/database");

let server = new ServerExpress(80);
let database = new Database("localhost","root","123");

server.startServer();
database.connect();


