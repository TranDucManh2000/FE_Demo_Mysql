import { BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { FC } from "react";
import useMenuUser from "./hook";
import { ReceivedProps } from "./hook";
import MenuUserWrapper from "./styled";

const MenuUserLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <MenuUserWrapper>
      <BellOutlined style={{ fontSize: 30, marginRight: 30 }} />
      <Avatar
        style={{
          backgroundColor: "none",
          verticalAlign: "middle",
          marginRight: 50,
        }}
        size="large"
        src={"https://joeschmoe.io/api/v1/random"}
      />
    </MenuUserWrapper>
  );
};

const MenuUser: FC<ReceivedProps> = (props) => (
  <MenuUserLayout {...useMenuUser(props)} />
);

export default MenuUser;
