const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const koaJwt = require('koa-jwt');
const router = new KoaRouter();
const { JWT_SECRET } = require('../config/index');

app.use(bodyParser());

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept',
//   );
//   ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   await next();
// });
app.use(router.routes());
app.use(router.allowedMethods());

app.use(
  koaJwt({
    secret: JWT_SECRET,
    debug: true,
    getToken: (ctx) => ctx.headers.authorization,
  }),
);

router.get('/auth', async (ctx, next) => {
  console.log('ctx.state', ctx.state);
  ctx.body = ctx.state.user; // 该中间件将验证后的用户数据直接返回给浏览器
});
router.get('/todolist', async (ctx, next) => {
  console.log('ctx.state', ctx.state);
  ctx.body = ctx.state.user; // 该中间件将验证后的用户数据直接返回给浏览器
});

require('./routes')(router);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
