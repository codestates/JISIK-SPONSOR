'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      path: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      category_id: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING(255)
      },
      thumbnail_url: {
        type: DataTypes.STRING(255)
      },
      term: {
        type: DataTypes.INTEGER
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
        type: DataTypes.STRING(64)
      },
      goal: {
        type: DataTypes.DECIMAL(12, 2)
      },
      pledged: {
        type: DataTypes.DECIMAL(12, 2)
      },
      remainder: {
        type: DataTypes.DECIMAL(12, 2)
      },
      sponsors: {
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      comments: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      wishes: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      views: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      project_background: {
        type: DataTypes.TEXT('long')
      },
      project_progress: {
        type: DataTypes.TEXT('long')
      },
      project_goals: {
        type: DataTypes.TEXT('long')
      },
      budget_synopsis: {
        type: DataTypes.TEXT('long')
      },
      milestone_description: {
        type: DataTypes.TEXT('long')
      },
      researcher_word: {
        type: DataTypes.TEXT
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
      modelName: 'project',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return project;
};
