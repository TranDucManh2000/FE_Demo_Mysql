import { Button, Form, Input, Modal } from "antd";
import { FC } from "react";
import useLogin, { ReceivedProps } from "./hook";

const LoginLayout: FC<ReceivedProps> = ({
  modalLogin,
  setmodalLogin,
  onFinish,
  onFinishFailed,
}) => {
  return (
    <>
      <Modal
        style={{ top: 20, left: "30%" }}
        open={modalLogin}
        footer={false}
        onOk={() => setmodalLogin(false)}
        onCancel={() => setmodalLogin(false)}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const Login: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLogin(props)} />
);

export default Login;
