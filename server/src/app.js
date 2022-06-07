const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = new KoaRouter();

require('./routes')(router);

app.use(bodyParser());

app.use(router.routes());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
