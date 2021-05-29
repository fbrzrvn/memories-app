import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { CreatePost, UpdatePost } from "./pages/FormPost";
import Home from "./pages/Home";
import * as ROUTES from "./routes";
import { GlobalStyles } from "./styles/globals";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.UPDATE} component={UpdatePost} />
        <Route path={ROUTES.CREATE} component={CreatePost} />
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </>
  );
};

export default App;
