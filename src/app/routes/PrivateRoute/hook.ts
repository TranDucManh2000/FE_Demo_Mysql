import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export type ReceivedProps = Record<string, never>;

const usePrivateRoute = (props: ReceivedProps) => {
  const location = useLocation();
  const [useToken, setUseToken] = useState({ type: 1 });

  const checkToken = useMemo(() => {
    return useToken.type === 1 ? 1 : 0;
  }, [useToken]);

  return {
    ...props,
    useToken,
    setUseToken,
    checkToken,
    from: location,
  };
};

export type Props = ReturnType<typeof usePrivateRoute>;

export default usePrivateRoute;
