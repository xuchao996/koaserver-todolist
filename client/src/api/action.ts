import { TodoListByUserid, Todo, todoId, todo } from "./index";
import { formatDataWrap } from "@/utils";
const headers = {
  authorization: "123",
  "Content-Type": "application/json",
};
export const getTodoListData = async (userid) => {
  return await fetch(TodoListByUserid + userid, {
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const createTodo = async (params) => {
  return await fetch(Todo, {
    method: "put",
    body: JSON.stringify(params),
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const deleteTodo = async (id: string) => {
  return await fetch(`${Todo}/${id}`, {
    method: "delete",
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.data);
};
/**
 *
 * @param id
 * @param params
 * @returns
 */
export const updateTodo = async (id: todoId, params: todo) => {
  return await fetch(`${Todo}/${id}`, {
    method: "post",
    headers,
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((res) => res.data);
};
// export const updateTodo1 = formatDataWrap(updateTodo)
