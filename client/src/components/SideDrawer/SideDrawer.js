import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { LOGOUT } from '../../constants/actionTypes';

import useStyles from './styles';

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userProfile'))
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    history.push('/auth');
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        <Link to="/" className={classes.linkText}>
          <ListItem button>
            <ListItemText primary="home" />
          </ListItem>
        </Link>
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
              <Button
                variant="contained"
                color="secondary"
                className={classes.logout}
                onClick={logout}
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
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer('right', true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
