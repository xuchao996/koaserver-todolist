const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db', 'xuchao', '123456', {
  host: '124.70.152.179',
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});
// 创建模型
sequelize.sync({
  force: true,
});
/**
 *
 * @param {string} query sql
 */

const sqlQuery = async (
  query,
  options = { type: Sequelize.QueryTypes.SELECT },
) => {
  return await sequelize.query(
    {
      query: query,
    },
    options,
  );
};

module.exports = {
  sqlquery: sqlQuery,
  sequelize,
};
