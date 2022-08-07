const User = require('../../services/user');
const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');

const login = async ({ request }) => {
  const { username, password } = request.body;
  if (!username || !password) {
    return null;
  }
  let UserData = await User.Query({ username, password });
  if (UserData[0]) {
    delete UserData[0].password;
    return { ...UserData[0] };
  } else {
    return null;
  }
};

const findAll = async (ctx) => {
  const { request } = ctx;
  const { username } = request.body;
  let UserData = await User.FindAll({ username });
  return UserData[0] ? { id: UserData[0].id } : null;
};

const register = async (ctx) => {
  const { request } = ctx;
  const { username, password } = request.body;
  await User.Create({ username, password });
  const UserData = await findAll(ctx);
  return UserData;
};
/**
 * 随机获取格言一条
 */
const getMaxim = () => {
  const tableData = xlsx.parse(
    path.resolve(process.cwd(), './config', '格言表.xlsx'),
  );
  console.log('tableData', tableData[0].data);
};

module.exports = { login, register, findAll, getMaxim };
