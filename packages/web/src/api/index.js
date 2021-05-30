import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("USER_PROFILE")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("USER_PROFILE")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/sign-in", formData);
export const signUp = (formData) => API.post("/sign-up", formData);

export const getPosts = () => API.get("/");
export const createPost = (post) => API.post("/create", post);
export const updatePost = (id, post) => API.patch(`/update/${id}`, post);
export const deletePost = (id) => API.delete(`/delete/${id}`);
export const likePost = (id) => API.patch(`/like/${id}`);
