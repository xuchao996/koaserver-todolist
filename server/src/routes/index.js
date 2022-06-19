const todos = require('./todo');
const user = require('./user');

module.exports = (router) => {
  router.get('/', (ctx, next) => {
    ctx.response.body = 'hello polly2';
    //   next();
  });
  router.get('/404', (ctx, next) => {
    ctx.response.body = 'hello 404';
    //   next();
  });

  user(router);
  todos(router);
};
