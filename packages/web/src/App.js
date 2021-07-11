import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Theme from "./components/Theme";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { CreatePost, UpdatePost } from "./pages/FormPost";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Search from "./pages/Search";
import User from "./pages/User";
import * as ROUTES from "./routes";

const App = () => {
  return (
    <Theme>
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.ME} component={User} />
        <Route path={ROUTES.USER} component={User} />
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={ROUTES.UPDATE} component={UpdatePost} />
        <Route path={ROUTES.CREATE} component={CreatePost} />
        <Route path={ROUTES.POST} component={Post} />
        <Route path={ROUTES.POSTS} component={Home} exact />
        <Route
          path={ROUTES.HOME}
          component={() => <Redirect to={ROUTES.POSTS} />}
        />
      </Switch>
    </Theme>
  );
};

export default App;
