import { LoginResponse, User } from "../types/user-store";
import axios from "./config";
import Axios from "axios";

export async function requestLogin(formData: FormData): Promise<LoginResponse> {
  const response = await Axios(axios.defaults.baseURL + "/auth/token", {
    data: formData,
    method: "POST",
    withCredentials: true,
  });

  return response.data;
}

export async function requestPersonalInfo(): Promise<User> {
  return (await axios(`/auth/me`)).data;
}

export async function requestLogout() {
  const response = await axios.delete("/auth/token", { withCredentials: true });
  return response.data;
}

export async function requestUserUpdate(formData: FormData): Promise<User> {
  const response = await axios("/auth/me", {
    data: formData,
    method: "PATCH",
  });

  return response.data;
}

export async function requestUserDelete() {
  const response = await axios.delete("/auth/me");

  return response.data;
}

export async function requestChangePassword(formData: FormData): Promise<User> {
  const response = await axios("/auth/me/change-password", {
    data: formData,
    method: "POST",
  });

  return response.data;
}

export async function requestUserImageDelete() {
  const response = await axios.delete("/auth/me/delete-image");

  return response.data;
}