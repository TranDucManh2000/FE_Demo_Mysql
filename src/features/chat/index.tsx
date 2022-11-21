import { FC } from "react";
import { ReceivedProps } from "./hook";
import { io } from "socket.io-client";
import ChatWrapper from "./styled";
import useChat from "./hook";
import { Button } from "antd";

const ChatLayout: FC<ReceivedProps> = ({ props }) => {
  const socket = io("ws://localhost:3001");

  socket.on("chat message", (mes) => {
    console.log("connect", mes);
  });

  const sen = () => {
    socket.emit("chat message", "bbb");
  };

  return (
    <ChatWrapper>
      <Button onClick={sen}>send</Button>
    </ChatWrapper>
  );
};

const ChatOption: FC<ReceivedProps> = (props) => (
  <ChatLayout {...useChat(props)} />
);

export default ChatOption;
