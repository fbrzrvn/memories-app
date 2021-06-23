import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { CreatePost, UpdatePost } from "./pages/FormPost";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Search from "./pages/Search";
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
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={ROUTES.POST} component={Post} />
        <Route path={ROUTES.POSTS} component={Home} />
        <Route
          path={ROUTES.HOME}
          exact
          component={() => <Redirect to={ROUTES.POSTS} />}
        />
      </Switch>
    </>
  );
};

export default App;
