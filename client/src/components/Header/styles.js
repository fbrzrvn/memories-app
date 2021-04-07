import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  navbarDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navDisplayFlex: {
    display: 'flex',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    margin: '0 8px',
  },
}));
