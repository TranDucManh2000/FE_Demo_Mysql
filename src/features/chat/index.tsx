import { FC } from "react";
import { ReceivedProps } from "./hook";
import { io } from "socket.io-client";
import ChatWrapper from "./styled";
import useChat from "./hook";
import { Button } from "antd";
import { Checkbox, Form, Input } from "antd";

const ChatLayout: FC<ReceivedProps> = ({ data, setData }) => {
  const socket = io("ws://localhost:3001");

  socket.on("chat message", (mes) => {
    setData([...data, { mes: mes.mes, admin: mes.admin }]);
    console.log(mes);
  });
  socket.on("getuser", (mes) => {
    console.log(mes);
  });
  console.log("data", data);

  const send = (mesager: string, admin: boolean) => {
    socket.emit("chat message", {
      mes: mesager,
      token: "token",
      admin: admin,
      id: 10,
    });
  };

  const onFinish = (values: any) => {
    send(values.mesager, values.admin);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ChatWrapper>
      <div className="messager">
        {data.map((vl: any, index: number) => (
          <div key={index}>
            {vl.admin === true ? (
              <p className="admin">Admin :{vl.mes} </p>
            ) : (
              <p className="user">User : {vl.mes}</p>
            )}
          </div>
        ))}
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="mesager"
          name="mesager"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="admin" valuePropName="checked">
          <Checkbox>admin me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ChatWrapper>
  );
};

const ChatOption: FC<ReceivedProps> = (props) => (
  <ChatLayout {...useChat(props)} />
);

export default ChatOption;
