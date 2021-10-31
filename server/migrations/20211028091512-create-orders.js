'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'projects', key: 'id' }
      },
      merchant_uid: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(12, 2)
      },
      buyer_name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      buyer_tel: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      buyer_email: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      buyer_addr: {
        type: Sequelize.STRING(255)
      },
      buyer_postcode: {
        type: Sequelize.STRING(255)
      },
      success: {
        type: Sequelize.BOOLEAN
      },
      status: {
        type: Sequelize.STRING(64)
      },
      imp_uid: {
        type: Sequelize.STRING(255)
      },
      pg_provider: {
        type: Sequelize.STRING(255)
      },
      pg_tid: {
        type: Sequelize.STRING(255)
      },
      pay_method: {
        type: Sequelize.STRING(64)
      },
      paid_amount: {
        type: Sequelize.INTEGER
      },
      paid_at: {
        type: Sequelize.INTEGER
      },
      receipt_url: {
        type: Sequelize.STRING(255)
      },
      card_name: {
        type: Sequelize.STRING(255)
      },
      apply_num: {
        type: Sequelize.STRING(255)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
