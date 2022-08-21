/**
 * 这个表是中间表，拿来进行同步的
 * 存放实时数据
 */
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
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
    },
    todogroupId: {
      field: 'todogroup_id',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    todogroupState: {
      field: 'todogroup_state',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    todogroupTime: {
      field: 'todogroup_time',
      type: DataTypes.DATE,
      allowNull: true,
    },
    todoId: {
      field: 'todo_id',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    todoState: {
      field: 'todo_state',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    todoTime: {
      field: 'todo_time',
      type: DataTypes.DATE,
      allowNull: true,
    },
    createTime: {
      field: 'create_time',
      type: DataTypes.DATE,
      allowNull: true,
    },
    updateTime: {
      field: 'update_time',
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

module.exports = TodoGroup;
