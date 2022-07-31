const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');

class TodoGroup_Todo_Map extends Model {}

TodoGroup_Todo_Map.init(
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
    todo_id: {
      type: DataTypes.INTEGER,
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
    tableName: 'todo-group_todo_relation',
  },
);

module.exports = TodoGroup_Todo_Map;
