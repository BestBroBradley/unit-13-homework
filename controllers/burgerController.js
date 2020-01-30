const express = require ("express")

const router = express.Router();

var burger = require("../models/burger.js")

router.get("/", (req, res) => {
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

router.put("/api/burgers", (req, res) => {
    connection.query("UPDATE hamburgers SET isEaten = ? WHERE id = ?", [true, req.body.id], (err, data) => {
        if (err) {
            return res.status(500).end()
        }
        res.status(200).end();
    })
})

router.post("/api/burgers", (req, res) => {
    connection.query(`INSERT INTO hamburgers (name) VALUES (?)`, [req.body.name], (err, data) => {
        if (err) {
            return res.status(500).end()
        }
        res.status(200).end();
    })
})