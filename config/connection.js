const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Mysqlis110%fabulous!",
    database: "hamburger_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`)
})

module.exports = connection;