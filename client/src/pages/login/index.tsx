import { useCallback, useContext } from "react";
import "./index.less";
import { Form, Input, Button, Toast } from "antd-mobile";

import { LoginApi } from "@/api/action";

import { useNavigate } from "react-router-dom";

import { LoadingContext } from "@/store/loading";
import { type ILoadingContext } from "@/store/loading";

const { Item } = Form;

const Login: React.FC = (props) => {
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;
  const navigate = useNavigate();
  const onFinish = useCallback(async (formData) => {
    setLoading(true);
    try {
      const res = await LoginApi(formData);
      const { data } = res;
      if (data.errcode === 1000) {
        const { "jwt-token": token } = data.data;
        Toast.show("登录成功");
        localStorage.setItem("token", token);
        navigate("/home" + `?userid=${data.data.id}`);
      } else {
        Toast.show(res.data.errmsg);
      }
    } catch (error) {}
    setLoading(false);
  }, []);
  const goRegister = useCallback(() => {
    navigate("/register");
  }, []);
  return (
    <div className="login">
      <div className="login-header">
        {/* <img className="logo" src={logo} alt="" /> */}
      </div>
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

        <Button fill="none" onClick={goRegister} style={{ width: "100%" }}>
          去注册
        </Button>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
