const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');

class TodoGroup extends Model {}

TodoGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      //   primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    todogroup_id: {
      type: DataTypes.INTEGER,
    },
    todogroup_state: {
      type: DataTypes.INTEGER,
    },
    todogroup_time: {
      type: DataTypes.DATE,
    },
    todo_id: {
      type: DataTypes.INTEGER,
    },
    todo_state: {
      type: DataTypes.INTEGER,
    },
    todo_time: {
      type: DataTypes.DATE,
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'todo_todo-group',
  },
);
