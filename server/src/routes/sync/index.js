module.exports = async (ctx) => {
  const synctodogroup = require('../../controllers/synctodogroup/index.js');
  console.log('synctodogroup.init', synctodogroup.init);
  //   const res = await synctodogroup.init();
  ctx.body = {
    code: 200,
    errmsg: '同步成功',
    data: [],
  };
};
