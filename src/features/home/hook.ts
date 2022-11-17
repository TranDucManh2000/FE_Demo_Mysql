import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useHome = (props: ReceivedProps) => {
  const [current, setCurrent] = useState("hello world");
  const [img, setImg] = useState();

  return {
    ...props,
    img,
    setImg,
    current,
    setCurrent,
  };
};

export type Props = ReturnType<typeof useHome>;

export default useHome;
