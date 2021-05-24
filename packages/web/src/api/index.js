import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const signIn = (formData) => API.post("/sign-in", formData);
export const signUp = (formData) => API.post("/sign-up", formData);
