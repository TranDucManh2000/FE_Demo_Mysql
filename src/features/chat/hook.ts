import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useChat = (props: ReceivedProps) => {
  const [data, setData] = useState<string[]>([]);
  return {
    ...props,
    data,
    setData,
  };
};

export type Props = ReturnType<typeof useChat>;

export default useChat;
