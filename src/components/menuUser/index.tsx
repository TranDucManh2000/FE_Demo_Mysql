import { BellOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import { FC, useState } from "react";
import useMenuUser from "./hook";
import { ReceivedProps } from "./hook";
import MenuUserWrapper from "./styled";

const MenuUserLayout: FC<ReceivedProps> = ({ props }) => {
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <MenuUserWrapper>
      <BellOutlined style={{ fontSize: 30, marginRight: 30 }} />
      <Avatar
        onClick={() => setModal1Open(true)}
        style={{
          backgroundColor: "none",
          verticalAlign: "middle",
          marginRight: 50,
        }}
        size="large"
        src={"https://joeschmoe.io/api/v1/random"}
      />
      <Modal
        style={{ top: 20, left: "30%" }}
        open={modal1Open}
        footer={false}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <div>
          <Avatar
            style={{
              backgroundColor: "none",
              verticalAlign: "middle",
              marginRight: 50,
            }}
            size="large"
            src={"https://joeschmoe.io/api/v1/random"}
          />
          <span>manh tran</span>
          <hr />
          <p>
            <LogoutOutlined /> Log Out
          </p>
        </div>
      </Modal>
    </MenuUserWrapper>
  );
};

const MenuUser: FC<ReceivedProps> = (props) => (
  <MenuUserLayout {...useMenuUser(props)} />
);

export default MenuUser;
