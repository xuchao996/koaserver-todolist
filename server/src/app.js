const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = new KoaRouter();

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

require('./routes')(router);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
