import { BellOutlined, VideoCameraAddOutlined } from "@ant-design/icons";
import { FC } from "react";
import useMenuUser from "./hook";
import { ReceivedProps } from "./hook";
import MenuUserWrapper from "./styled";

const MenuUserLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <MenuUserWrapper>
      <VideoCameraAddOutlined style={{ fontSize: 40 }} />
      <BellOutlined style={{ fontSize: 40 }} />
    </MenuUserWrapper>
  );
};

const MenuUser: FC<ReceivedProps> = (props) => (
  <MenuUserLayout {...useMenuUser(props)} />
);

export default MenuUser;
