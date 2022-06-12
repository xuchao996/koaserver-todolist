const User = require('../../services/user');

const login = async ({ request }) => {
  const { username, password } = request.body;
  if (!username || !password) {
    return null;
  }
  let UserData = await User.Query({ username, password });

  return UserData[0] ? { id: UserData[0].id } : null;
};

const register = async ({ request }) => {
  const { username, password } = request.body;

  await User.Create({ username, password });
  const UserData = await findAll({ request });
  console.log('UserData', UserData);
  return UserData;
};

const findAll = async ({ request }) => {
  const { username } = request.body;
  let UserData = await User.FindAll({ username });
  return UserData[0] ? { id: UserData[0].id } : null;
};

module.exports = { login, register, findAll };
