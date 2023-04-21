import { Response } from "../types";
import axios from "./config";

export async function requestListNasheeds(limit: number): Promise<Response> {
  return (await axios(`/nasheed/nasheeds/?limit=${limit}`)).data;
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
