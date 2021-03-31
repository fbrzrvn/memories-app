import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchRecipe = () => API.get('/recipes');
export const createRecipe = newRecipe => API.post('/recipes', newRecipe);
