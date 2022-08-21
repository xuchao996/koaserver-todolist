const syncTable = require('@models/todo_todo-group');
const TodoGroupModel = require('@models/todo-group');
const TodogroupTodoRelationController = require('../todoGroupTodoMap/index.js');

const dayjs = require('dayjs');
class SyncTodoGroup {
  async sync() {
    const todoGroupList = await TodoGroupModel.findAll();
    const current = new Date();
    todoGroupList.forEach(async (todogroup) => {
      const { time, id, userId } = todogroup;
      if (dayjs(current).isBefore(time)) {
        console.log('id', userId);
        // 查当前TODOgroup 下的TODO有多少
        const relationtablelist =
          await TodogroupTodoRelationController.getListByParams({
            todogroupId: id,
          });
        console.log('relationtablelist', todogroup.id);
        const params = relationtablelist.map((todo) => {
          // console.log('todo', todo.todoId);
          return {
            userId: todogroup.userId,
            todogroupId: todogroup.id,
            todoId: todo.todoId,
            todogroupState: todogroup.state,
            todogroupTime: todogroup.time,
          };
        });
        // console.log('params', params);
        await syncTable.bulkCreate(params);
      }
    });
  }
}
new SyncTodoGroup().sync();
module.export = new SyncTodoGroup();
