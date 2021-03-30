import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useStyles from './styles';

const RecipeGrid = ({ recipe }) => {
  const classes = useStyles();

  return (
    <Grid item component={Card} className={classes.card}>
      <CardMedia
        component="img"
        image={recipe.image}
        title={recipe.title}
        className={recipe.cardImage}
      />
      <CardContent className={classes.cardBody}>
        <Typography variant="h6" color="textPrimary">
          {recipe.description}
        </Typography>
        <Link to={`/recipes/${recipe._id}`} className={classes.cardLink}>
          <Typography variant="h4" color="primary" gutterBottom>
            {recipe.title}
          </Typography>
        </Link>
        <Grid container direction="row" justify="space-between">
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
      <CardActions className={classes.cardAction}>
        <Button color="primary">
          <ThumbUpAltOutlined />
        </Button>
        <Button className={classes.cardFavorite}>
          <FavoriteBorderIcon />
        </Button>
      </CardActions>
    </Grid>
  );
};

export default RecipeGrid;
