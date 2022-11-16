export type ReceivedProps = Record<string, any>;

const useButton = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useButton>;

export default useButton;
