const errMap = require('./errcode');
const factoryResponse = (err, data = null) => {
  return {
    errcode: err,
    errmsg: errMap[err],
    data: data,
  };
};
module.exports = {
  factoryResponse,
};
