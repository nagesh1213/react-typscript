import React from "react";
import { Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/store";
import PublicRoute from "./routes/PublicRoutes";
import HomePage from "./components/UI Components/HomePage";
import { isLogin } from "./components/isAuthenticated";

const Routes: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicRoute
          restricted={isLogin()}
          path="/schedule/"
          exact
          component={HomePage}
        />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
