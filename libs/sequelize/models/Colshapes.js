'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colshapes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Colshapes.init({
    range: {
      type: DataTypes.DOUBLE(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    x: {
      type: DataTypes.DOUBLE(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    y: {
      type: DataTypes.DOUBLE(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    z: {
      type: DataTypes.DOUBLE(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Colshapes',
    tableName: 'Colshapes'
  });
  return Colshapes;
};