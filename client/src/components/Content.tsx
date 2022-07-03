import { forwardRef, useState } from "react";
import { Input } from "antd-mobile";
const Content = forwardRef((props, ref) => {
  const [tempVal, setTemVal] = useState("");
  const inputHandler = (val) => {
    console.log(val);
    setTemVal(val);
  };
  return (
    <div>
      <Input
        ref={ref}
        placeholder="请输入内容"
        value={tempVal}
        onChange={inputHandler}
      />
    </div>
  );
});

export default Content;
