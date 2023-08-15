import Axios from "axios";
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

const axios = setupCache(
  Axios.create({
    baseURL: "http://127.0.0.1:8000",
  }),
  {
    cacheTakeover: false,
  }
);

export default axios;
