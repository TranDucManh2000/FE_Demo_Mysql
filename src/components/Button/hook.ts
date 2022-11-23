import { ButtonProps } from "antd";

export type ReceivedProps = ButtonProps & {
  styles?: "Circle_Gray" | "Rectangle_Gray";
};

const useButton = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useButton>;

export default useButton;
