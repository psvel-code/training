'use strict';

// Define a model for role table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('designation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    tableName: 'designation'
  });
  // Adding a class level method.
  Model.associate = function (models) {
    this.id = this.hasMany(models.employee);
  };
  return Model;
};