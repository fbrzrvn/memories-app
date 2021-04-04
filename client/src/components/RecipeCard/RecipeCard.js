import moment from 'moment';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { RecipeContext } from '../../hooks/context';
import { likeRecipe } from '../../actions/recipe';
import Like from '../Like';

import Comments from './Comments';

import useStyles from './styles';

const RecipeCard = ({ recipe }) => {
  const user = JSON.parse(localStorage.getItem('userProfile'));
  const [, setCurrentRecipe] = useContext(RecipeContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = recipe => {
    setCurrentRecipe(recipe);
    history.push('/recipes/api');
  };

  return (
    <Grid container component={Card} className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.cardImage}>
        <CardMedia
          component="img"
          height="400"
          image={recipe.image}
          title={recipe.title}
          className={classes.cardMedia}
        />
        <Grid item className={classes.cardOverlay}>
          <Typography variant="h6">{recipe.name}</Typography>
          <Typography variant="body2">
            {moment(recipe.createdAt).fromNow()}
          </Typography>
        </Grid>
        <Grid item className={classes.cardOverlay2}>
          {(user?.result?.googleId === recipe?.author ||
            user?.result?._id === recipe?.author) && (
            <Button
              size="small"
              style={{ color: 'white' }}
              onClick={() => handleClick(recipe)}
            >
              <MoreHorizIcon />
            </Button>
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6} className={classes.cardBody}>
        <Grid item>
          <Typography variant="h4" component="h1">
            {recipe.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            {recipe.description}
          </Typography>
        </Grid>
        <Grid container justify="space-between">
          <Grid item>
            <Button
              size="small"
              color="primary"
              disabled={!user}
              onClick={() => dispatch(likeRecipe(recipe._id))}
            >
              <Like recipe={recipe} />
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" disabled={!user}>
              <FavoriteBorderIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <List>
            <ListItem>
              <Typography variant="h6">Ingridients:</Typography>
            </ListItem>
            {recipe.ingridients?.map((food, index) => (
              <ListItem key={index}>
                <Typography variant="body1">{food}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <Grid container className={classes.cardDetails}>
            <Grid item xs={4}>
              <Typography variant="h6">Serves:</Typography>
              <Typography variant="body1">{recipe.serves}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Difficulty:</Typography>
              <Typography variant="body1">{recipe.difficulty}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Estimed Time:</Typography>
              <Typography variant="body1">
                {recipe.hoursToPrep > 0
                  ? `${recipe.hoursToPrep}h ${recipe.minutesToPrep}min`
                  : `${recipe.minutesToPrep}min`}
              </Typography>
            </Grid>
          </Grid>
          <Comments comments={recipe.comments} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipeCard;
