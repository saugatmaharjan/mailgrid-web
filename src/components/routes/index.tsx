import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Mail from "components/mail";

const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/mail" />
      </Route>
      <Route path="/mail" exact>
        <Mail />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
