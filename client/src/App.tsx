import { createContext, useState, useContext } from "react";

import { SpinLoading, Mask } from "antd-mobile";

import logo from "./logo.svg";
import "./App.less";

import Routes from "./routers";
import { LoadingContext } from "./store/loading";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <div className="page">
      {/* <img className="logo" src={logo} alt="" /> */}
      <LoadingContext.Provider value={{ loading: loading, setLoading }}>
        <Routes />
      </LoadingContext.Provider>
      {loading && (
        <Mask className="global-loading">
          <SpinLoading style={{ "--size": "48px" }} />
        </Mask>
      )}
    </div>
  );
}

export default App;
