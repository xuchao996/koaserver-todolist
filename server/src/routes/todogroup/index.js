require('module-alias/register');

const { factoryResponse } = require('@utils');
const TodoGroupController = require('../../controllers/todogroup');
const { existUser } = require('@middleware/user');
const koaRouter = require('koa-router');
const router = new koaRouter('todogroup');

module.exports = () => {
  // 业务
  router.get('/today', existUser, async (ctx) => {
    const { userid } = ctx.state.user;
    const result = await TodoGroupController.getTodayList(userid);
    ctx.response.body = factoryResponse(0, result);
  });

  // 查看列表
  router.get('/list', async (ctx) => {
    const { userid } = ctx.state.user;
    if (!userid) {
      return (ctx.response.body = factoryResponse(1004));
    }
    const Todo = await TodoGroupController.getList(userid);
    console.log('Todo', Todo);
    ctx.response.body = factoryResponse(0, Todo);
  });
  // 查看集合
  router.get('/:todogroupid', async (ctx) => {
    const { params } = ctx;
    const { todogroupid } = params;
    if (!todogroupid) {
      return (ctx.response.body = factoryResponse(1004));
    }
    const Todo = await TodoGroupController.Find(todogroupid);
    console.log('Todo', Todo);
    ctx.response.body = factoryResponse(0, Todo);
  });
  // 新增
  router.post('/', async (ctx) => {
    const { body } = ctx.request;
    const { userid } = ctx.state.user;
    const res = await TodoGroupController.Create({ ...body, userId: userid });
    ctx.response.body = factoryResponse(0, res);
  });
  // 修改
  router.put('/:todogroupid', async (ctx) => {
    const { todogroupid } = ctx.params;
    const { body } = ctx.request;
    const res = await TodoGroupController.Update(todogroupid, body);
    ctx.response.body = factoryResponse(0, res);
  });
  // 删除
  router.delete('/:todogroupid', async (ctx) => {
    const { todogroupid } = ctx.params;
    const res = await TodoGroupController.Delete(todogroupid);
    ctx.response.body = factoryResponse(0, res);
  });

  // 查看详情
  router.get('/:todogroupid', async (ctx) => {
    const { todogroupid } = ctx.params;
    const res = await TodoGroupController.getDetailByTodoid(todogroupid);
    ctx.response.body = factoryResponse(0, res);
  });

  return router;
};
