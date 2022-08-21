const TodoGroupModel = require('@models/todo-group');
const TodoTodoGroupModel = require('@models/todo_todo-group');
const TodoGroupTodoRelationModel = require('@models/todo-group_todo_relation');
const { Op } = require('sequelize');
const { sqlquery: db } = require('../../services/connect');

const dayjs = require('dayjs');

class TodoGroupController {
  async getTodayList(userId) {
    const currentDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    // -- 1, /today api
    // -- 2, 查 r table 查出 g
    //1. todogroupid 查 TODOid
    // return await TodoGroupModel.findAll({
    //   where: {
    //     userId,
    //     time: {
    //       [Op.gte]: currentDate, // 大于等于当前时间
    //     },
    //   },
    // });
    // 换sql 语句写
    return await db(`
      SELECT r.*, g.title todoGroupTitle, t.title title, t.content content
      FROM 
      \`todo-group\` g 
      LEFT JOIN \`todo-group_todo_relation\` r 
      ON g.id = r.todogroup_id  # 通过groupid 去查group table
      INNER JOIN \`todo\` t
      ON t.id = r.todo_id
      WHERE g.time >= "${currentDate}"
      AND r.user_id = ${userId}
    `);
  }
  async getList(userId) {
    const res = await TodoGroupModel.findAll({
      where: {
        userId,
      },
    });
    return res;
  }
  ListByCurrentTime() {
    // ListByTime(date)
  }
  async Find(todogroupId) {
    return await TodoGroupModel.findOne({
      where: {
        id: todogroupId,
      },
    });
  }
  async Create(requestBody) {
    const todogroup = await TodoGroupModel.create(requestBody);
    const param = {
      todogroupId: todogroup.id,
      userId: requestBody.userId,
    };
    return await TodoGroupTodoRelationModel.create(param);
  }
  async Update(todogroupId, data) {
    const currentData = await TodoGroupModel.findOne({
      where: {
        id: todogroupId,
      },
    });
    Object.assign(currentData, data);
    console.log('current', currentData);
    return await currentData.save(currentData);
  }
  async Delete(todogroupId) {
    return await TodoGroupModel.destroy({
      where: {
        id: todogroupId,
      },
    });
  }
}

module.exports = new TodoGroupController();
