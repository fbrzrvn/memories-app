import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipe } from '../actions/recipe';
import Main from '../layout/Main';
import RecipeCard from '../components/RecipeCard';

const Recipe = ({ match }) => {
  const { recipeId } = match.params;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipe);

  useEffect(() => {
    dispatch(getRecipe(recipeId));
  }, [dispatch, recipeId]);

  return (
    <Main>
      <RecipeCard recipe={recipe} />
    </Main>
  );
};

export default Recipe;
