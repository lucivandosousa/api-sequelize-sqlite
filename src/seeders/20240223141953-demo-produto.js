'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        descricao: 'Produto 1',
        preco: 99.90,
        quantidade: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Produto 2',
        preco: 105.50,
        quantidade: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Produto 3',
        preco: 10.50,
        quantidade: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
