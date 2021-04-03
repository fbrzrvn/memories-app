import {
  FETCH_ALL,
  FETCH_ONE,
  CREATE,
  DELETE,
  UPDATE,
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
      return recipes.map(recipe =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    default:
      return recipes;
  }
};

export default recipeReducer;
