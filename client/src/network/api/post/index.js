import { axiosClient } from "./../../apiClient";

export const getPosts = () => axiosClient.get("/posts");

export const getPost = (id) => axiosClient.get(`/posts/${id}`);

export const addPost = (post) => axiosClient.post("/posts", post);

export const deletePost = (id, username) => axiosClient.delete(`/posts/${id}`, {username});

export const updatePost = (id, post) => axiosClient.put(`posts/${id}`, post);