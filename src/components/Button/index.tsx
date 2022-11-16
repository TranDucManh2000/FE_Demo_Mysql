import { FC } from "react";
import useButton, { ReceivedProps } from "./hook";
import ButtonWrapper from "./styled";

const ButtonLayout: FC<ReceivedProps> = ({ onClick, ...props }) => {
  return <ButtonWrapper onClick={onClick}>{props.children}</ButtonWrapper>;
};

const ButtonCustom: FC<ReceivedProps> = (props) => (
  <ButtonLayout {...useButton(props)} />
);

export default ButtonCustom;
