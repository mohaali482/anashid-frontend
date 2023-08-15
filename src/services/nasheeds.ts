import { Response } from "../types/store";
import axios from "./config";

let nasheeds_cache_keys = new Set<string>();

export async function requestListNasheeds(
  limit: number,
  query: string
): Promise<Response> {
  nasheeds_cache_keys.add(`list-nasheeds-limit-${limit}-query-${query}`);
  return (
    await axios(`/nasheed/nasheeds/?limit=${limit}&name__contains=${query}`, {
      id: `list-nasheeds-limit-${limit}-query-${query}`,
      cache: {
        update: {
          "list-nasheeds": () => {
            console.log(nasheeds_cache_keys);
            return "ignore";
          },
        },
      },
    })
  ).data;
}

export async function requestPageNasheeds(link: string): Promise<Response> {
  nasheeds_cache_keys.add(`list-nasheeds-link-${link}`);
  return (
    await axios(link, {
      id: `list-nasheeds-link-${link}`,
    })
  ).data;
}

export async function requestAddNasheed(formData: FormData) {
  const response = await axios("/nasheed/nasheeds/", {
    data: formData,
    method: "POST",
  });

  if (response.status === 201) {
    nasheeds_cache_keys.forEach(async (key) => {
      await axios.storage.remove(key);
    });
    nasheeds_cache_keys.clear();
  }

  return response;
}

export async function requestNasheed(id: number): Promise<Response> {
  return (await axios(`/nasheed/nasheeds/${id}`)).data;
}
