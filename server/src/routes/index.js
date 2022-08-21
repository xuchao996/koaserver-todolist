const todos = require('./todo');
const user = require('./user');
const todogroup = require('./todogroup');
const sync = require('./sync');

const crypto = require('crypto');
const { JWT_SECRET } = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = (rootRouter) => {
  const todogroupRouter = todogroup();
  const todoRouter = todos();
  const userRouter = user();

  const verifyUser = async (ctx, next) => {
    let token = ctx.headers.authorization;

    const parts = ctx.header.authorization.trim().split(' ');

    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    }
    console.log('token', token);
    const header = token.split('.')[0];
    const payload = token.split('.')[1];
    const sign = token.split('.')[2];
    token = jwt.sign(
      {
        useid: 5,
        iat: 1659369564,
        exp: 1659455964,
      },
      JWT_SECRET,
      { algorithm: 'HS256' },
    );
    console.log('token', token);
    await next();
  };
  rootRouter.use('/user', userRouter.routes(), userRouter.allowedMethods());
  rootRouter.use(
    '/todo',
    // verifyUser,
    todoRouter.routes(),
    todoRouter.allowedMethods(),
  );

  rootRouter.use(
    '/todogroup',
    todogroupRouter.routes(),
    todogroupRouter.allowedMethods(),
  );

  rootRouter.get('/sync', sync);
};
