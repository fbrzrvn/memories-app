import { Link } from 'react-router-dom';
import {
  AppBar,
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
  { title: `Home`, path: `/` },
  { title: `Create`, path: `/recipes` },
  { title: `Favorite`, path: `/recipes/favorite` },
];

const Header = () => {
  const classes = useStyles();
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
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
              <ListItem>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={'/logout'}
                >
                  Logout
                </Button>
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
