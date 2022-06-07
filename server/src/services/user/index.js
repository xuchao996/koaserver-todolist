const db = require('../../services/connect');

const Query = async ({ username, password }) => {
  return await db(
    `select * from user where name='${username}' and password=md5('${password}')`,
  );
};
const Create = async ({ username, password }) => {
  return await db(
    `insert into user values(null, '${username}', md5('${password}'))`,
  );
};

const User = {
  Create,
  Query,
};
module.exports = User;
