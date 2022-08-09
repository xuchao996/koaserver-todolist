const TodogroupTodoRelation = require('@model/todo-group_todo_relation');
module.exports = {
  async getList() {
    const res = await TodogroupTodoRelation.findAll();
    return res;
  },
  async getListByParams(params) {
    const res = await TodogroupTodoRelation.findAll({
      where: {
        ...params,
      },
    });
    return res;
  },
  ListByCurrentTime() {
    // ListByTime(date)
  },
  ListByTime(date) {},
  async Find(todogroupId) {
    return await TodogroupTodoRelation.findOne({
      where: {
        id: todogroupId,
      },
    });
  },
  //
  async Create(requestBody) {
    return await TodogroupTodoRelation.create(requestBody);
  },
  Update: async (todogroupId, data) => {
    const currentData = await TodogroupTodoRelation.findOne({
      where: {
        id: todogroupId,
      },
    });
    Object.assign(currentData, data);
    console.log('currentData', currentData);

    return await currentData.save(currentData);
  },
  Delete: async (todogroupId) => {
    return await TodogroupTodoRelation.destroy({
      where: {
        id: todogroupId,
      },
    });
  },
};
