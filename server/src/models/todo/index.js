const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');

class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(20),
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'todo',
    paranoid: false, // 一个 paranoid 表是一个被告知删除记录时不会真正删除它的表.反而一个名为 deletedAt 的特殊列会将其值设置为该删除请求的时间戳.
  },
);

module.exports = Todo;
