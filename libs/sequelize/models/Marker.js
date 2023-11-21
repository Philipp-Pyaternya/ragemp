'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Marker.init({
    type: {
      type: DataTypes.INTEGER(),
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

    scale: {
      type: DataTypes.DOUBLE(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    direction: {
      type: DataTypes.STRING(),

    },
    rotation: {
      type: DataTypes.STRING(),

    },
    color: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    visible:
    {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    dimension: {
      type: DataTypes.INTEGER(),
    },
  }, {
    sequelize,
    modelName: 'Marker',
    tableName: 'Markers'
  });
  return Marker;
};