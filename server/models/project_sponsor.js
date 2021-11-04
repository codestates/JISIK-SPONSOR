'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_sponsor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_sponsor.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      project_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      pledged: {
        allowNull: false,
        type: DataTypes.DECIMAL(12, 2)
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(255)
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
      modelName: 'project_sponsor',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return project_sponsor;
};
