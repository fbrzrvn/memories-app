import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Button,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';

import SideDrawer from '../SideDrawer';

import useStyles from './styles';

const navLinks = [
  { title: `Create`, path: `/recipes/api` },
  { title: `Favorite`, path: `/recipes/favorite` },
];

const Header = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userProfile'))
  );
  const classes = useStyles();

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('userProfile')));
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            component={Link}
            to="/"
          >
            <Home fontSize="large" />
          </IconButton>
          <Hidden xsDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {user
                ? navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))
                : null}

              <ListItem>
                {user ? (
                  <div className={classes.profile}>
                    <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
                      {user?.result.name.charAt(0)}
                    </Avatar>
                    <ListItemText
                      primary={user?.result.name}
                      className={classes.userName}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.logout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={'/auth'}
                  >
                    Sign In
                  </Button>
                )}
              </ListItem>
            </List>
          </Hidden>
          <Hidden smUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
