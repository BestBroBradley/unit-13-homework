var connection = require("./connection.js")

const orm = {
    logAll: (colToLog) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [colToLog], (err, data) => {
            if (err) throw err;
            
        })
    },
}

module.exports = orm;