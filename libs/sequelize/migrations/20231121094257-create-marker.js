'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Markers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      x: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      y: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      z: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      scale: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      direction: {
        type: Sequelize.STRING,
      },
      rotation: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      visible: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      dimension: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Markers');
  }
};