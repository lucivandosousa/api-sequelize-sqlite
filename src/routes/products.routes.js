const { Router } = require("express")
const ProductController = require("../controllers/ProductController.js")

const productsRoute = Router()

productsRoute.post("/products", ProductController.criarProduto)
productsRoute.get("/products", ProductController.buscarProdutos)
productsRoute.get("/products/:id", ProductController.buscarProdutoPorID)
productsRoute.put("/products/:id", ProductController.atualizarProduto)
productsRoute.delete("/products/:id", ProductController.deletarProduto)

module.exports = productsRoute