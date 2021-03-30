import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%',
  },
  cardImage: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    padding: theme.spacing(2),
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardFavorite: {
    marginLeft: 'auto',
    color: red[500],
  },
  cardLink: {
    textDecoration: 'none',
  },
}));
