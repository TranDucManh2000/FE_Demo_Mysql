import { FC } from "react";
import { Outlet } from "react-router-dom";
import usePrivateRoute, { Props, ReceivedProps } from "./hook";

const PrivateRouteLayout: FC<Props> = ({ checkToken }) => {
  return checkToken === 1 ? <Outlet /> : null;
};

const PrivateRoute: FC<ReceivedProps> = (props) => (
  <PrivateRouteLayout {...usePrivateRoute(props)} />
);

export default PrivateRoute;
