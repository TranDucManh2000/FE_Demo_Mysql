import { FC } from "react";
import { Outlet } from "react-router-dom";
import usePublicRoute, { Props, ReceivedProps } from "./hook";

const PublicRouteLayout: FC<Props> = ({ location }) => {
  return <Outlet />;
};

const PublicRoute: FC<ReceivedProps> = (props) => (
  <PublicRouteLayout {...usePublicRoute(props)} />
);

export default PublicRoute;
