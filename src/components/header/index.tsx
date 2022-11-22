import { FC } from "react";
import MenuUser from "../menuUser";
import InputSearch from "../inputSearch";
import MenuDrop from "../menu";
import useButton, { ReceivedProps } from "./hook";
import HeaderWrapper from "./styled";

const HeaderLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <HeaderWrapper>
      <MenuDrop />
      <InputSearch />
      <MenuUser />
    </HeaderWrapper>
  );
};

const Header: FC<ReceivedProps> = (props) => (
  <HeaderLayout {...useButton(props)} />
);

export default Header;
