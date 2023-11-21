'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Colshapes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      range: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      x: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      y: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      z: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Colshapes');
  },
};
