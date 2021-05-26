import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

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
