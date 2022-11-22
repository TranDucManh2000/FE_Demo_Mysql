export type ReceivedProps = Record<string, any>;

const useMenuUser = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useMenuUser>;

export default useMenuUser;
