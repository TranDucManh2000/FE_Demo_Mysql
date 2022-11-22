import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Image, Menu, MenuProps } from "antd";
import { FC } from "react";
import useMenu, { ReceivedProps } from "./hook";
import MenuWrapper from "./styled";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
];

const MenuLayout: FC<ReceivedProps> = ({ collapsed, toggleCollapsed }) => {
  return (
    <MenuWrapper>
      <div style={{ width: 256 }}>
        <Button
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, border: "none" }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Image
          style={{ width: 120, height: 56 }}
          preview={false}
          src="https://vudigital.co/wp-content/uploads/2021/12/you-tube-2017-seeklogo.com-4-01.png"
        />
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </MenuWrapper>
  );
};

const MenuDrop: FC<ReceivedProps> = (props) => (
  <MenuLayout {...useMenu(props)} />
);

export default MenuDrop;
