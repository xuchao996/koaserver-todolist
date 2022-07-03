import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const TodoList: FC<Props> = (props) => {
  return (
    <div>
      <div>Todo-List</div>
      {props.children}
    </div>
  );
};

export default TodoList;
