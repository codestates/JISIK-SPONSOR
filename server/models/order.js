'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init(
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
      merchant_uid: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(12, 2)
      },
      buyer_name: {
        allowNull: false,
        type: DataTypes.STRING(128)
      },
      buyer_tel: {
        allowNull: false,
        type: DataTypes.STRING(64)
      },
      buyer_email: {
        allowNull: false,
        type: DataTypes.STRING(128)
      },
      buyer_addr: {
        type: DataTypes.STRING(255)
      },
      buyer_postcode: {
        type: DataTypes.STRING(255)
      },
      success: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(64),
        defaultValue: 'unpaid'
      },
      imp_uid: {
        unique: true,
        type: DataTypes.STRING(255)
      },
      pg_provider: {
        type: DataTypes.STRING(255)
      },
      pg_tid: {
        type: DataTypes.STRING(255)
      },
      pay_method: {
        type: DataTypes.STRING(64)
      },
      paid_amount: {
        type: DataTypes.INTEGER
      },
      paid_at: {
        type: DataTypes.INTEGER
      },
      receipt_url: {
        type: DataTypes.STRING(255)
      },
      card_name: {
        type: DataTypes.STRING(255)
      },
      apply_num: {
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
      modelName: 'order',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return order;
};
