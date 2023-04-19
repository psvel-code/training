'use strict';

// Define a model for role table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    designationId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alternateEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'employee'
  });
  // Adding a class level method.
  Model.associate = function (models) {
    this.roleId = this.belongsTo(models.role);
    this.designationId = this.belongsTo(models.designation);
  };
  return Model;
};