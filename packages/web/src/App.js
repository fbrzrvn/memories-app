import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { CreatePost, UpdatePost } from "./pages/FormPost";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Search from "./pages/Search";
import * as ROUTES from "./routes";
import { DarkTheme, GlobalStyles, LightTheme } from "./styles/globals";

const App = () => {
  const [theme] = useTheme();
  const themeMode = theme === "dark" ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.UPDATE} component={UpdatePost} />
        <Route path={ROUTES.CREATE} component={CreatePost} />
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={ROUTES.POST} component={Post} />
        <Route path={ROUTES.POSTS} component={Home} exact />
        <Route
          path={ROUTES.HOME}
          component={() => <Redirect to={ROUTES.POSTS} />}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
