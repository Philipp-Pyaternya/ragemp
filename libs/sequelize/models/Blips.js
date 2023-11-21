'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blips.init({
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    sprite: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },

    position: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },

    scale: {
      type: DataTypes.FLOAT(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    color: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    alpha: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    drawDistance: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    shortRange:
    {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    rotation: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    dimension: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    radius: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Blips',
  });
  return Blips;
};