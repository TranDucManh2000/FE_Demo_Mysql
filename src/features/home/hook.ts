export type ReceivedProps = Record<string, any>;

const useHome = (props: ReceivedProps) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return {
    ...props,
    data,
  };
};

export type Props = ReturnType<typeof useHome>;

export default useHome;
