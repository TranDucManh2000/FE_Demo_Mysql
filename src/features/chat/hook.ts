export type ReceivedProps = Record<string, any>;

const useChat = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useChat>;

export default useChat;
