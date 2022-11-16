import { useLocation } from "react-router-dom";

export type ReceivedProps = Record<string, any>;

const usePublicRoute = (props: ReceivedProps) => {
  const location = useLocation();

  return {
    ...props,
    location,
  };
};

export type Props = ReturnType<typeof usePublicRoute>;

export default usePublicRoute;
