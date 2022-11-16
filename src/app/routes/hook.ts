export type ReceivedProps = Record<string, any>;

const useRoutesHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useRoutesHook>;

export default useRoutesHook;
