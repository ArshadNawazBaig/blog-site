import { axiosClient } from "./../../apiClient";

export const register = (user) => axiosClient.post("/auth/register", user);
export const login = (user) => axiosClient.post("/auth/login", user);