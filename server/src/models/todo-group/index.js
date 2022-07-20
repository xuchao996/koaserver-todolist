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
    },
    state: {
      type: DataTypes.INTEGER,
    },
    time: {
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
    tableName: 'todo-group',
  },
);
