// const domain = "http://localhost:3000/";
// const domain = "http://124.70.152.179:3000/";
const domain = "/api/";
export const Login = domain + "user/login";
export const Register = domain + "user/register";
export const TodoList = domain + "todogroup/today";
export const Todo = domain + "todo";
export const Today = domain + "today";

export type todoId = string;
export type todo = {
  id: todoId;
  title: string;
  content: string;
  status: number;
};
