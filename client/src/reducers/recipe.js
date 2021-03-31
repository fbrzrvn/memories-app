import { FETCH_ALL, CREATE } from '../constants/actionTypes';

const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return recipes;
    default:
      return recipes;
  }
};

export default recipeReducer;
