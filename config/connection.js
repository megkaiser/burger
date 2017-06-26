//Setup the code to connect Node to MySQL
//Export the connection

var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    hots: "localhost",
    user: "root",
    password: "mysql3",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;