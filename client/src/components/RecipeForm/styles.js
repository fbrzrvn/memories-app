import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  btnContainer: {
    marginLeft: 'auto',
    marginTop: theme.spacing(2),
  },
  btnForm: {
    margin: theme.spacing(1, 1, 1, 0),
  },
}));
