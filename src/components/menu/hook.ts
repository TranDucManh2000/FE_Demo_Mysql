import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useMenu = (props: ReceivedProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return {
    ...props,
    collapsed,
    setCollapsed,
    toggleCollapsed,
  };
};

export type Props = ReturnType<typeof useMenu>;

export default useMenu;
