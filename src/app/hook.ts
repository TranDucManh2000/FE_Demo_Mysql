import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useHome = (props: ReceivedProps) => {
  const [current, setCurrent] = useState("hello world");

  return {
    ...props,
    current,
    setCurrent,
  };
};

export type Props = ReturnType<typeof useHome>;

export default useHome;
