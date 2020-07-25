var mysql = require("mysql");

class Database{

    #database;

    constructor(host,user,password){
        this.#database = mysql.createConnection({
            host: host,
            user: user,
            password: password
        })
    }

    connect(){
        this.#database.connect(function (error){
            if(error){
                console.log(error.stack);
                return;
            }

        console.log("Conncted to");
        })
    }

}

module.exports = Database;
