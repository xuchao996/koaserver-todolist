import "./index.less";
import { Form, Button, Input, Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "@/api/action";
const { Item } = Form;
const Register = (props) => {
  const onFinish = async (formData) => {
    const res = await RegisterApi(formData);
    const { errcode, data } = res;
    if (errcode === 1003) {
      Toast.show("注册成功");
      navigate("/login");
    } else {
      Toast.show(res.errmsg);
    }
  };
  const navigate = useNavigate();
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
              注册
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

        <Button
          fill="none"
          onClick={() => navigate("/login")}
          style={{ width: "100%" }}
        >
          去登录
        </Button>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
