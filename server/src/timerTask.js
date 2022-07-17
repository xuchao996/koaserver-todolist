/**
 * *    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
 * 
 * 
 */

const schedule = require('node-schedule');

// 定时任务调度
const job = schedule.scheduleJob('38 * * * *', function () {
  console.log('The answer to life, the universe, and everything!');
  console.log(new Date());
});
