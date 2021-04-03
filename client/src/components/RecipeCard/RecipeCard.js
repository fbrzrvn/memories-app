import moment from 'moment';
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

import { likeRecipe } from '../../actions/recipe';
import Like from '../Like';

import Comments from './Comments';

import useStyles from './styles';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid container component={Card} className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.cardImage}>
        <CardMedia
          component="img"
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
          <Button color="secondary">
            <FavoriteBorderIcon />
          </Button>
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
        <Grid item>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likeRecipe(recipe._id))}
          >
            <Like recipe={recipe} />
          </Button>
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
