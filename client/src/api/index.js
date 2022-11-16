import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = () => API.get("/posts");
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const createPost = (postData) =>
  API.post("/createpost", postData, {
    headers: { authorization: JSON.parse(localStorage.getItem("user")).token },
  });

export const createUser = (userData) => API.post("/register", userData);
export const logUser = (userData) => API.post("/login", userData);
