import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:4000",
});

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

export const getPosts = (page) => API.get(`/posts?page=${page}`);
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (post) => API.post("/posts/create", post);
export const commentPost = (id, comment) =>
  API.post(`/posts/${id}/comment`, { comment });
export const updatePost = (id, post) => API.patch(`/posts/update/${id}`, post);
export const likePost = (id) => API.patch(`/posts/like/${id}`);
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);
export const deleteComment = (postId, commentId) =>
  API.delete(`/posts/delete/${postId}/comment/${commentId}`);

export const getUserPosts = () => API.get("/users/me");
