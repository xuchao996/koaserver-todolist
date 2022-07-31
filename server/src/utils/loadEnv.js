const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
console.log(process.cwd());

/**
 *
 * @param {'' | 'local' | 'prod' | 'test'} mode
 */
const loadEnv = (mode = '') => {
  const envFile = mode ? `.env.${mode}` : `.env`;
  const rootDir = process.cwd();
  const filePath = path.resolve(rootDir, envFile);
  const localPath = path.resolve(rootDir, `.env.local`);
  const load = (loadPath) => {
    try {
      const env = dotenv.config({
        path: loadPath,
        debug: process.env.debug,
      });
      dotenvExpand.expand(env);
    } catch (error) {
      console.log('error', error);
    }
  };
  load(filePath); // 取前面一个值
  load(localPath);
};

module.exports = loadEnv;
