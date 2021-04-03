import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteRecipe, likeRecipe } from '../../actions/recipe';
import Like from '../Like';

import useStyles from './styles';

const RecipeGrid = ({ recipe }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid item component={Card} className={classes.card}>
      <CardMedia
        component="img"
        image={recipe.image}
        title={recipe.title}
        className={recipe.cardImage}
      />
      <Grid item className={classes.cardOverlay}>
        <Typography variant="h6">{recipe.name}</Typography>
        <Typography variant="body2">
          {moment(recipe.createdAt).fromNow()}
        </Typography>
      </Grid>
      <Grid item className={classes.cardOverlay2}>
        <Button color="secondary">
          <FavoriteBorderIcon />
        </Button>
      </Grid>
      <CardContent className={classes.cardBody}>
        <Link to={`/recipes/${recipe._id}`} className={classes.cardLink}>
          <Typography variant="h4" color="primary" gutterBottom>
            {recipe.title}
          </Typography>
        </Link>
        <Grid
          container
          className={classes.flexBetween}
          direction="row"
          justify="space-between"
        >
          <Grid item>
            <Typography variant="subtitle1" color="textPrimary">
              Serves
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              {recipe.serves}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="textPrimary">
              Difficulty
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              {recipe.difficulty}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="textPrimary">
              Estimed Time
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              {recipe.hoursToPrep > 0 && `${recipe.hoursToPrep}h `}
              {` ${recipe.minutesToPrep}min`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.flexBetween}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeRecipe(recipe._id))}
        >
          <Like recipe={recipe} />
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteRecipe(recipe._id))}
        >
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Grid>
  );
};

export default RecipeGrid;
