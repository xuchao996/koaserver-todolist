const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('db', 'xuchao', '123456', {
//   host: '47.92.209.41',
//   dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
// });
const sequelize = new Sequelize('notes', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});

// 创建模型
sequelize.sync({
  // force: true, 真实场景应该用不到
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
