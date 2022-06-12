import { useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import { Button } from "antd-mobile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button>antd button</Button>
    </div>
  );
}

export default App;
