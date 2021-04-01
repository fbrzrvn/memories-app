import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchRecipes = () => API.get('/recipes');
export const fetchRecipeById = id => API.get(`/recipes/${id}`);
export const createRecipe = recipe => API.post('/recipes/api', recipe);
export const deleteRecipe = id => API.delete(`/recipes/api/${id}`);
