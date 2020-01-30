var connection = require("../config/connection.js")

const burger = {
    logAll: (colToLog, cb) => {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [colToLog], (err, data) => {
            if (err) throw err
            console.log("Got to burger.logAll")
            return cb(data)
        })

    },

    updateBoolean: (table, boo, target, cb) => {
        let queryString = "UPDATE ?? SET isEaten = ?? WHERE id = ?"
        connection.query(queryString, [table, boo, target], (err, data) => {
            if (err) throw err
            console.log("Got to burger.updateBoolean")
            return cb(data)

        })
    },

    insertItem: (table, key, value) => {
        let queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, key, value], (err, data) => {
            if(err) throw err
        
        })
    }
}

module.exports = burger;