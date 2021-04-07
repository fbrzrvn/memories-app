import * as api from '../api';
import {
  CREATE,
  FETCH_ALL,
  DELETE,
  FETCH_ONE,
  UPDATE,
  LIKE,
} from '../constants/actionTypes';

export const getRecipes = () => async dispatch => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRecipe = id => async dispatch => {
  try {
    await api.fetchRecipeById(id);
    dispatch({
      type: FETCH_ONE,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = recipe => async dispatch => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRecipe = id => async dispatch => {
  try {
    await api.deleteRecipe(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRecipe = (id, recipe) => async dispatch => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeRecipe = id => async dispatch => {
  const { data } = await api.likeRecipe(id);
  try {
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
