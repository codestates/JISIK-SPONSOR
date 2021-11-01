'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(128)
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(128)
      },
      mobile: {
        unique: true,
        type: DataTypes.STRING(64)
      },
      nickname: {
        unique: true,
        type: DataTypes.STRING(128)
      },
      password: {
        type: DataTypes.STRING(255)
      },
      bio: {
        type: DataTypes.STRING(255)
      },
      profile_url: {
        type: DataTypes.STRING(255)
      },
      role_id: {
        allowNull: false,
        defaultValue: 3,
        type: DataTypes.INTEGER
      },
      signup_method: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      email_verified: {
        type: DataTypes.BOOLEAN
      },
      key_for_verify: {
        type: DataTypes.STRING(255)
      },
      projects_supported: {
        type: DataTypes.INTEGER
      },
      total_amount: {
        type: DataTypes.DECIMAL(12, 2)
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
      modelName: 'user',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return user;
};
