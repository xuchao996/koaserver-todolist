const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db', 'xuchao', '123456', {
  host: '124.70.152.179',
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});
/**
 *
 * @param {string} query sql
 */
module.exports = async (query) => {
  return await sequelize.query(
    {
      query: query,
    },
    { type: Sequelize.QueryTypes.SELECT },
  );
};
