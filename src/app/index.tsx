import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useHome, { ReceivedProps } from "./hook";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

const AppLayout: FC<ReceivedProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

const App: FC<ReceivedProps> = (props) => <AppLayout {...useHome(props)} />;

export default App;
