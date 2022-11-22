export type ReceivedProps = Record<string, any>;

const useHeader = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
