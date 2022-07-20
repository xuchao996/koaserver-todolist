const { sequelize } = require('../../services/connect');

const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
    },
    phone: {
      type: DataTypes.STRING(11),
    },
    password: {
      type: DataTypes.STRING(),
    },
  },
  {
    sequelize,
    tableName: 'user',
    // paranoid: false, // 一个 paranoid 表是一个被告知删除记录时不会真正删除它的表.反而一个名为 deletedAt 的特殊列会将其值设置为该删除请求的时间戳.
  },
);
