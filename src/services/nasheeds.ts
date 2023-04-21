import axios from "./config";

export async function requestListNasheeds(): Promise<Response> {
  return (await axios("/nasheed/nasheeds/")).data;
}

export async function requestAddNasheed(formData: FormData) {
  return await axios("/nasheed/nasheeds/", {
    data: formData,
    method: "POST",
  });
}
