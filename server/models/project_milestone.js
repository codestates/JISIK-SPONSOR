'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_milestone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_milestone.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      project_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      goal_date: {
        type: 'TIMESTAMP'
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
      modelName: 'project_milestone',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return project_milestone;
};
