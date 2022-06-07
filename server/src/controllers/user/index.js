const User = require('../../services/user');

const login = async ({ request }) => {
  const { username, password } = request.body;
  if (!username || !password) {
    return null;
  }
  let UserData = await User.Query({ username, password });
  // 没有注册 帮他注册
  if (!UserData.length) {
    UserData = await User.Create({ username, password });
  }
  return UserData;
};

module.exports = { login };
