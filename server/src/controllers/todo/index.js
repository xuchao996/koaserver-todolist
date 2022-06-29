// const { sqlquery: db } = require('../../services/connect');
const TodoModel = require('@model/todo');

const Todo = {
  getListByUserId: async (id) => {
    const res = await TodoModel.findAll({
      attributes: ['id', 'title', 'createdAt'],
      where: {
        userid: id,
      },
    });
    return res;
  },
  //   getList: async () => {},
  getDetailByTodoid: async (todoid) => {
    return await TodoModel.findOne({
      where: {
        id: todoid,
      },
    });
  },
  Create: async (requestBody) => {
    return await TodoModel.create(requestBody);
  },
  Update: async (todoid, data) => {
    return await TodoModel.update(
      {
        ...data,
      },
      {
        where: {
          id: todoid,
        },
      },
    );
  },
  Delete: async (todoid) => {
    return await TodoModel.destroy({
      where: {
        id: todoid,
      },
    });
  },
};

module.exports = Todo;
