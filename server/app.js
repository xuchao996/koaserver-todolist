const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const staticServer = require('koa-static');
const app = new Koa();
const koaJwt = require('koa-jwt');
const router = new KoaRouter();
const { JWT_SECRET } = require('./config/index');
const loadEnv = require('./src/utils/loadEnv.js');

let mode = process.argv[process.argv.indexOf('--mode') + 1];
if (mode) {
  loadEnv(mode);
}
loadEnv();

app.use(staticServer('./static', { maxAge: 100000 }));
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
app.use(
  koaJwt({
    secret: JWT_SECRET,
    debug: true,
    // getToken: (ctx) => ctx.headers.authorization,
  }).unless({ path: [/login/, /register/] }),
);
const verifyUser = async (ctx, next) => {
  const token = ctx.headers.authorization;
  console.log(token);
  // const
  await next();
};
app.use(router.routes());
app.use(router.allowedMethods());
router.get('/test', (ctx, next) => {
  ctx.body = ctx.state.user;
});
require('./src/routes')(router);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
