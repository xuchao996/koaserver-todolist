const Sequelize = require('sequelize');

const { sqlquery: db } = require('../../services/connect');

const Query = async ({ username, password }) => {
  return await db(
    `select * from user where name='${username}' and password=md5('${password}')`,
  );
};
const Create = async ({ username, password }) => {
  return await db(
    `insert into user(id, name, password) values(null, '${username}', md5('${password}'))`,
    { type: Sequelize.QueryTypes.INSERT },
  );
};
const FindAll = async ({ username }) => {
  return await db(`select * from user where name='${username}'`);
};
const FindUser = async () => {
  return await db(`select name from user`);
};

const User = {
  Create,
  Query,
  FindAll,
  FindUser,
};
module.exports = User;
