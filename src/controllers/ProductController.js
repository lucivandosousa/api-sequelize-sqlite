const { Produto } = require("../models")

class ProductController {

  static async criarProduto(req, res) {
    const data = req.body
    const newProduct = { ...data, "createdAt": new Date(), "updatedAt": new Date() }

    if (!newProduct.descricao) {
      res
        .status(404)
        .send("Você deve inserir a descrição do produdo.")
      return
    }

    await Produto.create(newProduct)

    res
      .status(201)
      .send("Produdo cadastrado.")
  }

  static async buscarProdutos(req, res) {
    const products = await Produto.findAll()

    res
      .status(200)
      .json(products)
  }

  static async buscarProdutoPorID(req, res) {
    const { id } = req.params
    const product = await Produto.findByPk(id)

    if (!product) {
      res
        .status(404)
        .send("Produto não localizado.")
      return
    }

    res
      .status(200)
      .json(product)
  }

  static async atualizarProduto(req, res) {
    const { id } = req.params
    const data = req.body
    const product = await Produto.findByPk(id)

    if (!product) {
      res
        .status(404)
        .send("Produto não localizado.")
      return
    }

    await Produto.update({ ...data }, {
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Produto atualizado.")
  }

  static async deletarProduto(req, res) {
    const { id } = req.params
    const product = await Produto.findByPk(id)

    if (!product) {
      res
        .status(404)
        .send("Produto não localizado.")
      return
    }

    await Produto.destroy({
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Produto excluído.")
  }
}

module.exports = ProductController