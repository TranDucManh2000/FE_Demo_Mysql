export type ReceivedProps = Record<string, any>;

const useMenu = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useMenu>;

export default useMenu;
