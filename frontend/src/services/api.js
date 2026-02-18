import axios from "axios";

const API = "https://smart-blog-editor-fdl1.onrender.com/api";



export const register = (data) =>
  axios.post(API + "/auth/register", data);

export const login = (data) =>
  axios.post(API + "/auth/login", data);



export const createPost = () =>
  axios.post(API + "/posts");



export const savePost = (id, data) =>
  axios.patch(API + "/posts/" + id, data);



export const generateAI = (text) =>
  axios.post(API + "/ai/generate", {
    text: text
  });




