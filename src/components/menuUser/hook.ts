import { useState } from "react";
export type ReceivedProps = Record<string, any>;

const useMenuUser = (props: ReceivedProps) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modalLogin, setmodalLogin] = useState(false);

  return {
    ...props,
    modal1Open,
    setModal1Open,
    modalLogin,
    setmodalLogin,
  };
};

export type Props = ReturnType<typeof useMenuUser>;

export default useMenuUser;
