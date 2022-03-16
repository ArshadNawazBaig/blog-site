import { axiosClient } from "./../../apiClient";

export const getUsers = async () => await axiosClient.get("/users");
export const deleteUser = async (id) => await axiosClient.delete(`/users/${id}`);