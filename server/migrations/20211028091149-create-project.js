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
        defaultValue: 1,
        type: Sequelize.INTEGER,
        references: { model: 'categories', key: 'id' }
      },
      project_team_id: {
        type: Sequelize.INTEGER,
        references: { model: 'project_teams', key: 'id' }
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
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        defaultValue: '작성중',
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
      investors: {
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
