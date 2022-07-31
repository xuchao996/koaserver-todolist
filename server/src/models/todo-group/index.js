const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');

class TodoGroup extends Model {}

TodoGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    create_time: {
      type: DataTypes.DATE,
    },
    update_time: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'todo-group',
  },
);

module.exports = TodoGroup;
