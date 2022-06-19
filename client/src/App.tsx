import { createContext, useState, useContext } from "react";

import { SpinLoading } from "antd-mobile";

import logo from "./logo.svg";
import "./App.less";

import Routes from "./routers";
import { LoadingContext } from "./store/loading";

function App() {
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);
  return (
    <div className="page">
      <img className="logo" src={logo} alt="" />
      <LoadingContext.Provider value={{ loading: loading, setLoading }}>
        <Routes />
      </LoadingContext.Provider>
      {loading && <SpinLoading />}
    </div>
  );
}

export default App;
