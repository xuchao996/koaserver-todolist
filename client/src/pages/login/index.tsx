import { useCallback } from "react";
import "./index.less";
import { Form, Input, Button, Toast } from "antd-mobile";
import * as Api from "@/api";

import { useRequest } from "ahooks";
import { Router, useNavigate } from "react-router-dom";
const { Item } = Form;
const LoginApi = (data) => {
  return fetch(Api.Login, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
};
const Login: React.FC = (props) => {
  const navigate = useNavigate();
  const onFinish = useCallback(async (formData) => {
    try {
      const res = await LoginApi(formData).then((res) => res.json());
      // console.log("res", res["data"]);
      if (res) {
        const { id, "jwt-token": token } = res.data.data;
        console.log(id);
        console.log(token);
        Toast.show("登录成功");
        navigate("../home" + `?userid=${res.data.data.id}`);
      }
    } catch (error) {}
  }, []);

  return (
    <div className="login">
      <div className="login-header"></div>
      <div className="login-content">
        <Form
          name="form"
          onFinish={onFinish}
          footer={
            <Button block type="submit" color="primary" size="large">
              提交
            </Button>
          }
        >
          <Item name="username" label="账号" rules={[{ required: true }]}>
            <Input placeholder="请输入姓名" />
          </Item>
          <Item name="password" label="密码" rules={[{ required: true }]}>
            <Input placeholder="请输入密码" />
          </Item>
        </Form>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
