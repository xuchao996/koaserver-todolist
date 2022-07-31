const koaRouter = require('koa-router');
const router = new koaRouter('todogroup');

require('module-alias/register');
// const { TodoController, UserController } = require('../controllers/index');
const { login, register, findAll } = require('@controllers/user');

const errcodeMap = require('@errcode/index.js');
const { factoryResponse } = require('@utils');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../config');
module.exports = () => {
  router.post('/login', async (ctx) => {
    const res = await login(ctx);
    const errCode = res ? '1000' : '1001';
    if (errCode === '1000') {
      // 下发token
      const token = jwt.sign({ useid: res.id }, JWT_SECRET, {
        expiresIn: '1d',
      });
      Object.assign(res, { 'jwt-token': token });
    }
    ctx.response.body = {
      code: 0,
      data: factoryResponse(errCode, res),
    };
  });

  router.post('/register', async (ctx) => {
    let res = await findAll(ctx);
    let responseData;
    if (res) {
      responseData = factoryResponse(1002);
    } else {
      res = await register(ctx);
      responseData = factoryResponse(1003, res);
    }
    ctx.response.body = {
      code: 0,
      data: responseData,
    };
  });
  router.get('/users', async (ctx) => {
    d;
  });
  return router;
};
