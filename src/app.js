const express = require("express")
const { productsRoute } = require("./routes")
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./swagger.json")

const app = express()

app.use(express.json())
app.use(productsRoute)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/", (req, res) => res.send({"message": "API com Sequelize e SQLite"}))

module.exports = app