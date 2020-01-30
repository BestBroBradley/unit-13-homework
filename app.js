const orm = require("./config/orm.js");
const express = require("express")
const exphbs = require("express-handlebars")
const connection = require("./config/connection.js")

var app = express()

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Functionality:

// app.get("/", function(req, res) {
//     orm.logAll("hamburgers")

// })

app.get("/", (req, res) => {
    connection.query("SELECT * FROM hamburgers", (err, data) => {
        if (err) {
            return res.status(500).end()
        } else {
        const hamburgers = data
        const eatenArray = hamburgers.filter(hamburger => (!hamburger.isEaten))
        const uneatenArray = hamburgers.filter(hamburger => (hamburger.isEaten))
        res.render("index", {eaten: eatenArray, uneaten: uneatenArray})
        }
    })
})

app.put("/api/burgers", (req, res) => {
    connection.query("UPDATE hamburgers SET isEaten = ? WHERE id = ?", [true, req.body.id], (err, data) => {
        if (err) {
            return res.status(500).end()
        }
        res.status(200).end();
    })
})



// End functionality

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });