import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('userProfile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('userProfile')).token
    }`;
  }
  return req;
});

export const fetchRecipes = () => API.get('/recipes');
export const fetchRecipeById = id => API.get(`/recipes/${id}`);
export const createRecipe = recipe => API.post('/recipes/api', recipe);
export const deleteRecipe = id => API.delete(`/recipes/api/${id}`);
export const likeRecipe = id => API.patch(`/recipes/api/${id}/like`);

export const signIn = formData => API.post('/signin', formData);
export const signUp = formData => API.post('/signup', formData);
