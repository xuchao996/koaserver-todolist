const model = require('@models/todo_todo-group');
const { factoryResponse } = require('@utils');

const KoaRouter = require('koa-router');

const router = new KoaRouter('today');
module.exports = () => {
  router.get('/todo/:todayTodoId', async (ctx, next) => {
    const { todayTodoId } = ctx.params;
    const res = await model.findOne({
      where: {
        id: todayTodoId,
      },
    });
    console.log(res);
    ctx.body = factoryResponse(0, res);
  });

  router.put('/todo/:todayTodoId', async (ctx, next) => {
    const { todayTodoId } = ctx.params;
    let data = ctx.request.body;
    const currentData = await model.findOne({
      where: {
        id: todayTodoId,
      },
    });
    Object.assign(currentData, data);
    ctx.body = await currentData.save(currentData);
  });

  return router;
};
