'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      path: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: { model: 'categories', key: 'id' }
      },
      description: {
        type: Sequelize.STRING(255)
      },
      thumbnail_url: {
        type: Sequelize.STRING(255)
      },
      term: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: 'TIMESTAMP'
      },
      end_date: {
        type: 'TIMESTAMP'
      },
      status: {
        allowNull: false,
        defaultValue: 'draft',
        type: Sequelize.STRING(64)
      },
      goal: {
        type: Sequelize.DECIMAL(12, 2)
      },
      pledged: {
        type: Sequelize.DECIMAL(12, 2)
      },
      remainder: {
        type: Sequelize.DECIMAL(12, 2)
      },
      sponsors: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      comments: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      wishes: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      views: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      project_background: {
        type: Sequelize.TEXT('long')
      },
      project_progress: {
        type: Sequelize.TEXT('long')
      },
      project_goals: {
        type: Sequelize.TEXT('long')
      },
      budget_synopsis: {
        type: Sequelize.TEXT('long')
      },
      milestone_description: {
        type: Sequelize.TEXT('long')
      },
      researcher_word: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('projects');
  }
};
