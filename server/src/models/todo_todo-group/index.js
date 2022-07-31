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
    tableName: 'todo_todo-group',
    createdAt: false,
    updatedAt: false,
    paranoid: false, // 一个 paranoid 表是一个被告知删除记录时不会真正删除它的表.反而一个名为 deletedAt 的特殊列会将其值设置为该删除请求的时间戳.
    sequelize,
  },
);
