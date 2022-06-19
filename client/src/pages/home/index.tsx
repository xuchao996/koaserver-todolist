import { useAsyncEffect } from "ahooks";
import { useContext, useCallback, useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { TodoListByUserid } from "@/api";
import { Button, Input, Modal } from "antd-mobile";
import "./index.less";
import TodoList from "@/components/todoList";
import { ModalProps } from "antd-mobile/es/components/modal";
import { useMemo } from "react";
import { LoadingContext } from "@/store/loading";

const Home = (props) => {
  const [searchParams] = useSearchParams();
  const [todoList, setTodoList] = useState([]);
  const userid = searchParams.get("userid");
  const { setLoading } = useContext(LoadingContext);
  const getTodoListData = useCallback(async () => {
    return await fetch(TodoListByUserid + userid)
      .then((res) => res.json())
      .then((res) => res.data);
  }, []);
  useAsyncEffect(async () => {
    const res = await getTodoListData();
    console.log(res);
    setTodoList([]);
  }, []);
  const ModalOptions = useMemo<ModalProps>(
    () => ({
      title: "新增窗口",
      content: (
        <div>
          <Input />
        </div>
      ),
    }),
    []
  );
  const createTodo = useCallback(() => {
    Modal.confirm(ModalOptions).then((res) => {
      console.log("Modal", res);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, [ModalOptions]);

  return (
    <div>
      <TodoList></TodoList>
      <Button onClick={createTodo}>点击新增</Button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
