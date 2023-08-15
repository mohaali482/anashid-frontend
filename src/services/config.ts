import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { buildCustomMemoryStorage } from "./cacheStorage";

const axios = setupCache(
  Axios.create({
    baseURL: "http://127.0.0.1:8000",
  }),
  {
    cacheTakeover: false,
    storage: buildCustomMemoryStorage(),
  }
);

export default axios;
