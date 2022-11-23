import { Button } from "antd";
import styled from "styled-components";

const ButtonDefault = styled(Button)`
  min-width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid red;
  color: red;
`;
const CircleGray = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #909090;
  color: black;
  border: none;
  :hover {
    background-color: #909090;
    color: black;
    border: none;
  }
`;
const RectangleGray = styled(Button)`
  min-height: 48px;
  min-width: 60px;
  border-radius: 8px;
  border: none;
  color: black;
  background-color: #868686;
  opacity: 0.7;
  :hover {
    color: black;
    border: none;
    background-color: #868686;
    opacity: 0.7;
  }
  :focus {
  }
`;

export { ButtonDefault, CircleGray, RectangleGray };
