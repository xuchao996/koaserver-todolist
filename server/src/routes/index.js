const { TodoController, UserController } = require('../controllers/index');
const { login } = require('../controllers/user');

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
    console.log(res);
    ctx.response.body = {
      code: 0,
      data: res,
    };
  });
};
