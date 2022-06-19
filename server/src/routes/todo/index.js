require('module-alias/register');

const { factoryResponse } = require('@utils');
const TodoController = require('../../controllers/todo');

module.exports = (router) => {
  // 查看列表
  router.get('/todolist/:userid', async (ctx) => {
    const { params } = ctx;
    const { userid } = params;
    if (!userid) {
      return (ctx.response.body = factoryResponse(1004));
    }
    const Todo = await TodoController.getListByUserId(userid);
    console.log('Todo', Todo);
    ctx.response.body = factoryResponse(0, Todo);
  });
  // 新增
  router.put('/todo', async ({ request }) => {
    const { body } = request;
    const res = await TodoController.Create(body);
    ctx.response.body = factoryResponse(0, res);
  });
  // 修改
  router.post('/todo/:todoid', async (ctx) => {
    const { todoid } = ctx.params;
    const { body } = ctx.request;
    const res = await TodoController.Update(todoid, body);
    ctx.response.body = factoryResponse(0, res);
  });
  // 删除
  router.delete('/todo/:todoid', async (ctx) => {
    const { todoid } = ctx.params;
    const res = await TodoController.Delete(todoid);
    ctx.response.body = factoryResponse(0, res);
  });

  // 查看详情
  router.get('/todo/:todoid', async (ctx) => {
    const { todoid } = ctx.params;
    const res = await TodoController.getDetailByTodoid(todoid);
    ctx.response.body = factoryResponse(0, res);
  });
};
