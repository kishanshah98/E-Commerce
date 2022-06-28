const { Model, DataTypes } = require('sequelize');

// Imports database connection
const sequelize = require('../config/connection.js');

// Creates Category class
class Category extends Model {}

// Sets up fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Exports class
module.exports = Category;
