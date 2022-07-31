const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');
const User = require('../user');

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
    createdAt: false,
    updatedAt: false,
    tableName: 'todo-group_todo_relation',
  },
);

TodoGroup_Todo_Map.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = TodoGroup_Todo_Map;
