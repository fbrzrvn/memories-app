import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...recipes, action.payload];
    case DELETE:
      return recipes.filter(recipe => recipe._id !== action.payload);
    default:
      return recipes;
  }
};

export default recipeReducer;
