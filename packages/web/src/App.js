import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./routes";
import { GlobalStyles } from "./styles/globals";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </>
  );
};

export default App;
