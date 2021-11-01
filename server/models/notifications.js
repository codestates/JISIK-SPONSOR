'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notifications.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    },
    {
      sequelize,
      modelName: 'notifications',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return notifications;
};