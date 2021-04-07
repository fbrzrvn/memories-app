import {
  FETCH_ALL,
  FETCH_ONE,
  CREATE,
  DELETE,
  UPDATE,
  LIKE,
} from '../constants/actionTypes';

const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE:
      return recipes.find(recipe => recipe._id === action.payload);
    case CREATE:
      return [...recipes, action.payload];
    case DELETE:
      return recipes.filter(recipe => recipe._id !== action.payload);
    case UPDATE:
      return action.payload;
    case LIKE:
      return recipes.map(recipe =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    default:
      return recipes;
  }
};

export default recipeReducer;
