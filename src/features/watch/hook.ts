export type ReceivedProps = Record<string, any>;

const useWatch = (props: ReceivedProps) => {
  const data = [1];

  return {
    ...props,
    data,
  };
};

export type Props = ReturnType<typeof useWatch>;

export default useWatch;
