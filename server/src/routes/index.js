const todos = require('./todo');
const user = require('./user');
const todogroup = require('./todogroup');

module.exports = (rootRouter) => {
  // router.get('/', (ctx, next) => {
  //   ctx.response.body = 'hello polly2';
  //   //   next();
  // });
  // router.get('/404', (ctx, next) => {
  //   ctx.response.body = 'hello 404';
  //   //   next();
  // });
  const todogroupRouter = todogroup();
  const todoRouter = todos();
  const userRouter = user();
  rootRouter.use('/user', userRouter.routes(), userRouter.allowedMethods());
  rootRouter.use('/todo', todoRouter.routes(), todoRouter.allowedMethods());

  rootRouter.use(
    '/todogroup',
    todogroupRouter.routes(),
    todogroupRouter.allowedMethods(),
  );
};
