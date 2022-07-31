const TodoGroupModel = require('@model/todo-group');
module.exports = {
  getList: async () => {
    const res = await TodoGroupModel.findAll();
    return res;
  },
  ListByCurrentTime() {
    // ListByTime(date)
  },
  ListByTime(date) {},
  async Find(todogroupId) {
    return await TodoGroupModel.findOne({
      where: {
        id: todogroupId,
      },
    });
  },
  async Create(requestBody) {
    return await TodoGroupModel.create(requestBody);
  },
  Update: async (todogroupId, data) => {
    const currentData = await TodoGroupModel.findOne({
      where: {
        id: todogroupId,
      },
    });
    Object.assign(currentData, data);
    return await currentData.save(currentData);
  },
  Delete: async (todogroupId) => {
    return await TodoGroupModel.destroy({
      where: {
        id: todogroupId,
      },
    });
  },
};
