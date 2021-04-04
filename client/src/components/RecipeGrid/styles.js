import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: '5px',
    position: 'relative',
  },
  cardImage: {
    paddingTop: '56.25%', // 16:9
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
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
    color: 'white',
  },
  cardBody: {
    padding: theme.spacing(1, 2, 2),
  },
  cardLink: {
    textDecoration: 'none',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2, 1),
  },
}));
