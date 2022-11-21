import React, { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/route.const";
import useRoutesHook, { ReceivedProps } from "./hook";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RoutesWrapper from "./styled";

export interface RoutesRendererProps {
  routes: RouteObject[];
}

export function RoutesRenderer({ routes }: RoutesRendererProps) {
  const renderedRoutes = useRoutes(routes);
  return renderedRoutes;
}

const HomePage = React.lazy(() => import("../../features/home/index"));
const ChatPage = React.lazy(() => import("../../features/chat/index"));

const AppRoutesLayout: FC<ReceivedProps> = ({ props }) => {
  const getRoutes = () => [
    {
      path: ROUTE_PATHS.PUBLIC,
      element: <PublicRoute />,
      title: "",
      children: [
        {
          path: ROUTE_PATHS.DEFAULT,
          element: <HomePage />,
          title: "",
        },
        {
          path: ROUTE_PATHS.CHAT,
          element: <ChatPage />,
          title: "",
        },
      ],
    },
    {
      path: ROUTE_PATHS.PRIVATE,
      element: <PrivateRoute />,
      title: "",
      children: [
        {
          path: ROUTE_PATHS.PUBLIC,
          element: <HomePage />,
          title: "",
        },
      ],
    },
    { path: "*", title: "", element: <HomePage /> },
  ];
  return (
    <RoutesWrapper>
      <RoutesRenderer routes={getRoutes()} />
    </RoutesWrapper>
  );
};

const AppRoutes: FC<ReceivedProps> = (props) => (
  <AppRoutesLayout {...useRoutesHook(props)} />
);

export default AppRoutes;
