import { Nasheed } from "../redux/ducks/nasheedSlice";
import axios from "./config";

interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: Nasheed[];
}

export async function requestListNasheeds(): Promise<Response> {
  return (await axios("/nasheed/nasheeds/")).data;
}

export async function requestAddNasheed(formData: FormData) {
  return await axios("/nasheed/nasheeds/", {
    data: formData,
    method: "POST",
  });
}
