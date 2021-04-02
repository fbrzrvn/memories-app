import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  root: {
    borderRadius: '5px',
    padding: theme.spacing(0, 0, 3),
    marginBottom: theme.spacing(3),
  },
  cardImage: {
    position: 'relative',
  },
  cardMedia: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    marginBottom: theme.spacing(2),
  },
  cardOverlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  cardOverlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2, 0),
    marginBottom: theme.spacing(2),
  },
  cardBtns: {
    position: 'absolute',
    bottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      position: 'static',
      marginTop: theme.spacing(4),
    },
  },
  cardComments: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  cardComment: {
    padding: theme.spacing(0, 2),
  },
}));
