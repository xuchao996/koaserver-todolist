import { memo } from "react";
import { List } from "antd-mobile";
import classnames from "classnames";
const TodoItem = (props) => {
  const { todo, index } = props;

  return (
    <List.Item onClick={() => props.clickItemHandler(todo)} arrow={false}>
      <div
        className={classnames("item", todo.status === 1 ? "is-completed" : "")}
        style={{
          backgroundImage: `url('static/img/${index + 1}.jpg')`,
        }}
      >
        <div className="item-title">{todo.todoGroupTitle}</div>
        <div className="item-title">{todo.title}</div>
        <div className="item-desc">{todo.content}</div>
      </div>
    </List.Item>
  );
};

export default memo(TodoItem);
