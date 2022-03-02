import { axiosClient } from "./../../apiClient";

export const getPosts = async () => await axiosClient.get("/posts");

export const getPostsByCategory = async (slug) => await axiosClient.get(`/posts/?category=${slug}`);

export const getPost = async (id) => await axiosClient.get(`/posts/${id}`);

export const addPost = async (post) => await axiosClient.post("/posts", post);

export const deletePost = async (id, username) => await axiosClient.delete(`/posts/${id}`, {username});

export const updatePost = async (id, post) => await axiosClient.put(`posts/${id}`, post);