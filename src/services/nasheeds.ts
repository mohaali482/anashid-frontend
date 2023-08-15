import { Response } from "../types/store";
import axios from "./config";

export async function requestListNasheeds(
  limit: number,
  query: string
): Promise<Response> {
  return (
    await axios(`/nasheed/nasheeds/?limit=${limit}&name__contains=${query}`)
  ).data;
}

export async function requestPageNasheeds(link: string): Promise<Response> {
  return (await axios(link)).data;
}

export async function requestAddNasheed(formData: FormData) {
  return await axios("/nasheed/nasheeds/", {
    data: formData,
    method: "POST",
  });
}

export async function requestNasheed(id: number): Promise<Response> {
  return (await axios(`/nasheed/nasheeds/${id}`)).data;
}
