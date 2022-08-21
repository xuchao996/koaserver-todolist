/**
 * @author
 * @description 这个表不要冗余
 */
const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');
const User = require('../user');

const Todogroup = require('../todo-group');
const Todo = require('../todo');
class TodoGroup_Todo_Map extends Model {}

TodoGroup_Todo_Map.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: User,
        key: 'id',
      },
    },
    todogroupId: {
      field: 'todogroup_id',
      type: DataTypes.INTEGER,
      references: {
        model: Todogroup,
        key: 'id',
      },
    },
    todoId: {
      field: 'todo_id',
      type: DataTypes.INTEGER,
      references: {
        model: Todo,
        key: 'id',
      },
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
    createdAt: false,
    updatedAt: false,
    tableName: 'todo-group_todo_relation',
  },
);

TodoGroup_Todo_Map.belongsTo(User, {
  foreignKey: 'userId',
});
// 外键
TodoGroup_Todo_Map.belongsTo(Todogroup, {
  foreignKey: 'todogroupId',
});
// 外键
TodoGroup_Todo_Map.belongsTo(Todo, {
  foreignKey: 'todoId',
});

module.exports = TodoGroup_Todo_Map;
