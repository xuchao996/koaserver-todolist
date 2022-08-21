import { useAsyncEffect } from "ahooks";
import { useContext, useCallback, useState, useEffect } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import {
  Button,
  Input,
  Modal,
  SwipeAction,
  List,
  DotLoading,
  FloatingBubble,
} from "antd-mobile";
import { AddOutline } from "antd-mobile-icons";

import "./index.less";
import TodoList from "@/components/todoList";
import { ModalProps } from "antd-mobile/es/components/modal";
import { createRef, useMemo, useRef, Suspense } from "react";
import { ILoadingContext, LoadingContext } from "@/store/loading";
import Content from "@/components/Content";

import { type todoId, type todo } from "@/api/index";
import {
  getTodoListData,
  createTodo as FetchCreateTodo,
  deleteTodo as FetchDeleteTodo,
  updateTodo,
} from "@/api/action";
import TodoItem from "@/components/TodoItem";

const Home = (props) => {
  const [todoList, setTodoList] = useState([]);
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;

  useAsyncEffect(async () => {
    const res = await getTodoListData();
    setTodoList(res);
  }, []);

  const content = useRef();

  const createTodo = async () => {
    const params = {
      title: "我是title",
      content: "我是tontent",
      state: 1,
      time: 24,
      todogroupId: 25,
    };
    try {
      const res = await FetchCreateTodo(params);
      console.log("res", res);
    } catch (error) {}
  };
  const deleteTodo = async (id: todoId) => {
    console.log("id", id);
    setLoading(true);
    const res = await FetchDeleteTodo(id);
    setLoading(false);
  };
  const succeedTodo = async (id: todoId) => {
    const params = {
      state: 1,
    };
    await updateTodo(id, params);
    const res = await getTodoListData();
    setTodoList(res);
  };
  const leftActions = useMemo(
    () => [
      {
        key: "pin",
        text: "置顶",
        color: "primary",
      },
    ],
    []
  );
  // : Action[]
  const rightActions = useMemo(
    () => [
      {
        key: "succeed",
        text: "已完成",
        color: "light",
      },
      // {
      //   key: "mute",
      //   text: "免打扰",
      //   color: "warning",
      // },
      {
        key: "delete",
        text: "删除",
        color: "danger",
      },
    ],
    []
  );
  const clickItemHandler = (todo: todo) => {
    console.log(todo);
  };
  const handleItem = (action, id: todoId) => {
    const { key } = action;
    switch (key) {
      case "succeed":
        succeedTodo(id);
        break;
      case "delete":
        deleteTodo(id);
        break;

      default:
        break;
    }
  };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <div className="home-container">
      <div className="home-header">
        <div></div>
        <div className="">
          <Button onClick={logout}>退出登录</Button>
        </div>
      </div>
      <List>
        {todoList.map((todo, index) => (
          <SwipeAction
            key={todo.id}
            // leftActions={leftActions}
            rightActions={rightActions}
            onAction={(e) => handleItem(e, todo.id)}
          >
            <TodoItem
              todo={todo}
              index={index}
              clickItemHandler={clickItemHandler}
            ></TodoItem>
          </SwipeAction>
        ))}
      </List>
      {/* <Content ref={content} />
      <Button onClick={createTodo}>点击新增</Button> */}
      <FloatingBubble
        style={{
          "--initial-position-bottom": "24px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
        }}
        onClick={createTodo}
      >
        <AddOutline fontSize={32} />
      </FloatingBubble>
    </div>
  );
};

Home.propTypes = {};

export default Home;
