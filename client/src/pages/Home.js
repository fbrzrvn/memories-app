import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress, Grid, Typography } from '@material-ui/core';

import { getRecipes } from '../actions/recipe';
import Main from '../layout/Main';
import RecipeGrid from '../components/RecipeGrid';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipe);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <Main>
      <Grid container spacing={2}>
        {!recipes.length ? (
          <Grid container justify="center">
            <Typography variant="h3" aling="center" color="primary">
              Loading...
              <CircularProgress />
            </Typography>
          </Grid>
        ) : (
          recipes.map(recipe => (
            <Grid item key={recipe._id} xs={12} sm={6} md={4}>
              <RecipeGrid recipe={recipe} />
            </Grid>
          ))
        )}
      </Grid>
    </Main>
  );
};

export default Home;
