import * as api from '../api';
import { FETCH_ALL } from '../constants/actionTypes';

export const getRecipe = () => async dispatch => {
  try {
    const { data } = await api.fetchRecipe();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
