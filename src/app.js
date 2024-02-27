const express = require("express")
const { productsRoute } = require("./routes")

const app = express()

app.use(express.json())
app.use(productsRoute)

app.get("/", (req, res) => res.send({"message": "API com Sequelize e SQLite"}))

module.exports = app