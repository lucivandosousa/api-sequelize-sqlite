const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => res.send({"message": "API com Sequelize e SQLite"}))

module.exports = app