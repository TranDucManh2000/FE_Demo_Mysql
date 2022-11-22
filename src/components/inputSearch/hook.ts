export type ReceivedProps = Record<string, any>;

const useSearch = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useSearch>;

export default useSearch;
