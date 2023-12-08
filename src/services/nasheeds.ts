import { defaultKeyGenerator } from "axios-cache-interceptor";
import { Nasheed, Response } from "../types/nasheed-store";
import axios from "./config";
import { CustomMemoryStorage } from "./cacheStorage";
import { NasheedUpdatePayload } from "../redux/ducks/nasheedSlice";

axios.generateKey = (config) => {
  return defaultKeyGenerator(config) + "-" + "list-nasheeds";
};

export async function requestListNasheeds(
  limit: number,
  query: string
): Promise<Response> {
  return (
    await axios(`/nasheed/nasheeds/?limit=${limit}&name__icontains=${query}`)
  ).data;
}

export async function requestMyNasheeds(
  limit: number,
  query: string
): Promise<Response> {
  return (
    await axios(
      `/nasheed/my-nasheeds/?limit=${limit}&name__icontains=${query}`,
      { cache: false }
    )
  ).data;
}

export async function requestSavedNasheeds(
  limit: number,
  query: string
): Promise<Response> {
  return (
    await axios(
      `/nasheed/saved-nasheeds/?limit=${limit}&name__icontains=${query}`,
      { cache: false }
    )
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

export async function requestUpdateNasheed(payload: NasheedUpdatePayload) {
  const response = await axios(`/nasheed/nasheeds/${payload.id}/`, {
    data: payload.formData,
    method: "PATCH",
  });

  const storage = axios.storage as CustomMemoryStorage;
  storage.removeByGroup("list-nasheeds");

  return response;
}

export async function requestNasheed(id: number): Promise<Response> {
  return await axios(`nasheed/nasheeds/${id}/`);
}

export async function requestSaveNasheed(id: number): Promise<Nasheed> {
  const response = await axios(`/nasheed/saved-nasheeds/`, {
    method: "POST",
    data: {
      nasheed: id,
    },
  });

  if (response.status === 201) {
    const storage = axios.storage as CustomMemoryStorage;
    storage.removeByGroup("list-nasheeds");
  }

  return response.data;
}

export async function requestRemoveSavedNasheed(id: number) {
  const response = await axios(`/nasheed/saved-nasheeds/${id}/`, {
    method: "DELETE",
  });

  if (response.status === 201) {
    const storage = axios.storage as CustomMemoryStorage;
    storage.removeByGroup("list-nasheeds");
  }

  return response;
}

export async function requestRemoveNasheed(id: number) {
  const response = await axios(`/nasheed/nasheeds/${id}/`, {
    method: "DELETE",
  });

  if (response.status === 201) {
    const storage = axios.storage as CustomMemoryStorage;
    storage.removeByGroup("list-nasheeds");
  }

  return response;
}
