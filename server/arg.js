// const { getMaxim } = require('./src/controllers/user');

const loadEnv = require('./src/utils/loadEnv');
// getMaxim();
let mode = process.argv[process.argv.indexOf('--mode') + 1];

console.log('mode', mode, process.argv);

loadEnv(mode);

// 估计是：动态扫整个目录读取文件到index.js 下
const requireDirectory = require('require-directory');

process.exit(-1);
