const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

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


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})