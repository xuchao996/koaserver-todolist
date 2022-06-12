require('module-alias/register');
// const { TodoController, UserController } = require('../controllers/index');
const { login, register, findAll } = require('../controllers/user');

const errcodeMap = require('@errcode/index.js');
const { factoryResponse } = require('@utils');
const todos = require('./todo');

module.exports = (router) => {
  router.get('/', (ctx, next) => {
    ctx.response.body = 'hello polly2';
    //   next();
  });
  router.get('/404', (ctx, next) => {
    ctx.response.body = 'hello 404';
    //   next();
  });

  router.post('/login', async (ctx) => {
    const res = await login(ctx);
    const errCode = res ? '1000' : '1001';
    const responseData = {
      errcode: errCode,
      errmsg: errcodeMap[errCode],
      data: res,
    };
    ctx.response.body = {
      code: 0,
      data: responseData,
    };
  });

  router.put('/register', async (ctx) => {
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
  todos(router);
};
