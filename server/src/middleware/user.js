const { factoryResponse } = require('@utils');

class UserMiddleware {
  async existUser(ctx, next) {
    const { userid } = ctx.state.user;
    if (!userid) {
      return (ctx.response.body = factoryResponse(1004));
    }
    await next();
  }
}

module.exports = new UserMiddleware();
