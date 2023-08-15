import { defaultKeyGenerator } from "axios-cache-interceptor";
import { Response } from "../types/store";
import axios from "./config";
import { CustomMemoryStorage } from "./cacheStorage";

axios.generateKey = (config) => {
  return defaultKeyGenerator(config) + "-" + "list-nasheeds";
};

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
  const response = await axios("/nasheed/nasheeds/", {
    data: formData,
    method: "POST",
  });

  if (response.status === 201) {
    const storage = axios.storage as CustomMemoryStorage;
    storage.removeByGroup("list-nasheeds");
  }

  return response;
}

export async function requestNasheed(id: number): Promise<Response> {
  return await axios(`/nasheed/nasheeds/${id}`);
}
