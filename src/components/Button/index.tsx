import { FC } from "react";
import useButton, { ReceivedProps } from "./hook";
import { ButtonDefault, CircleGray, RectangleGray } from "./styled";

const ButtonLayout: FC<ReceivedProps> = ({ onClick, styles, ...props }) => {
  return styles ? (
    styles === "Circle_Gray" ? (
      <CircleGray onClick={onClick}>{props.children}</CircleGray>
    ) : styles === "Rectangle_Gray" ? (
      <RectangleGray onClick={onClick}>{props.children}</RectangleGray>
    ) : (
      <ButtonDefault onClick={onClick}>{props.children}</ButtonDefault>
    )
  ) : (
    <ButtonDefault onClick={onClick}>{props.children}</ButtonDefault>
  );
};

const ButtonCustom: FC<ReceivedProps> = (props) => (
  <ButtonLayout {...useButton(props)} />
);

export default ButtonCustom;
