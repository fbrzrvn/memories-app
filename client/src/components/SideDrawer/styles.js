import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  list: {
    width: 250,
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
}));
