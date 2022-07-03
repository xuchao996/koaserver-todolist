// const domain = "http://localhost:3000/api";
// const domain = "http://124.70.152.179:3000/";
const domain = "/api/";
export const Login = domain + "login";
export const Register = domain + "register";
export const TodoListByUserid = domain + "todolist/";
export const Todo = domain + "todo";

export type todoId = string;
export type todo = {
  id: todoId;
  title: string;
  content: string;
  status: number;
};
