import { TodoListByUserid, Todo, Login, Register, todoId, todo } from "./index";
import { formatDataWrap } from "@/utils";
const fetchWrap = async (
  url,
  method,
  params?,
  headers = {
    authorization: localStorage.getItem("token"),
    "Content-Type": "application/json",
  }
) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(params),
    headers,
  });
  const { status } = response;
  switch (status) {
    case 200:
      return response.json();
    case 401:
      window.location.replace("/login");
      return response;
    default:
      break;
  }
  response;
};
const get = async (url, query?) => await fetchWrap(url, "get");
const post = async (url, params?) => await fetchWrap(url, "post", params);
const put = async (url, params?) => await fetchWrap(url, "put", params);
const deleteApi = async (url) => await fetchWrap(url, "delete");

export const getTodoListData = async (userid) => {
  return await get(TodoListByUserid + userid).then((res) => res.data);
};

export const createTodo = async (params) => {
  return await put(Todo, params).then((res) => res.data);
};

export const deleteTodo = async (id: string) => {
  return await deleteApi(`${Todo}/${id}`).then((res) => res.data);
};
/**
 *
 * @param id
 * @param params
 * @returns
 */
export const updateTodo = async (id: todoId, params: todo) => {
  return await post(`${Todo}/${id}`, params).then((res) => res.data);
};
// export const updateTodo1 = formatDataWrap(updateTodo)

export const LoginApi = async (data) => {
  return await post(Login, data);
};

export const RegisterApi = async (data) => {
  return await post(Register, data).then((res) => res.data);
};
