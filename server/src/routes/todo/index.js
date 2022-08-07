const koaRouter = require('koa-router');
const router = new koaRouter('todogroup');

require('module-alias/register');

const { factoryResponse } = require('@utils');
const TodoController = require('../../controllers/todo');
const TodoGroupTodoRelationController = require('../../controllers/todoGroupTodoMap');
module.exports = () => {
  // 查看列表
  router.get('/list', async (ctx) => {
    const { userid } = ctx.state.user;
    if (!userid) {
      return (ctx.response.body = factoryResponse(1004));
    }
    const Todo = await TodoController.getListByUserId(userid);
    console.log('Todo', Todo);
    ctx.response.body = factoryResponse(0, Todo);
  });
  // 新增
  router.post('/', async (ctx) => {
    const { body } = ctx.request;
    const params = {
      ...body,
      userId: ctx.state.user.userid,
    };
    console.log('params', params);
    const res = await TodoController.Create(params);
    const { id } = res;
    const param = {
      todoId: id,
      todogroupId: body.todogroupId,
      userId: ctx.state.user.userid,
    };
    await TodoGroupTodoRelationController.Create(param);

    ctx.response.body = factoryResponse(0, res);
  });
  // 修改
  router.put('/:todoid', async (ctx) => {
    const { todoid } = ctx.params;
    const { body } = ctx.request;
    const res = await TodoController.Update(todoid, body);
    ctx.response.body = factoryResponse(0, res);
  });
  // 删除
  router.delete('/:todoid', async (ctx) => {
    const { todoid } = ctx.params;
    const res = await TodoController.Delete(todoid);
    ctx.response.body = factoryResponse(0, res);
  });

  // 查看详情
  router.get('/:todoid', async (ctx) => {
    const { todoid } = ctx.params;
    const res = await TodoController.getDetailByTodoid(todoid);
    ctx.response.body = factoryResponse(0, res);
  });
  return router;
};
