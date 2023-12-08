import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { buildCustomMemoryStorage } from "./cacheStorage";
import {
  loginSuccess,
  logoutUser,
  setAccessToken,
} from "../redux/ducks/user-slice";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { RootState } from "../redux/store";
import { requestPersonalInfo } from "./user";

let store: ToolkitStore<RootState>;

export const injectStore = (_store: ToolkitStore<RootState>) => {
  store = _store;
};

const axios = setupCache(
  Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_DOMAIN,
  }),
  {
    cacheTakeover: false,
    storage: buildCustomMemoryStorage(),
  }
);

async function requestRefreshToken() {
  try {
    const response = await Axios.post(
      axios.defaults.baseURL + "/auth/token/refresh",
      {},
      {
        withCredentials: true,
      }
    );
    const newToken = response.data.access;
    store.dispatch(setAccessToken(newToken));
    const personalInfo = await requestPersonalInfo();
    store.dispatch(loginSuccess({ user: personalInfo, access: newToken }));

    return response;
  } catch (error) {
    throw error;
  }
}

axios.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().user.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await requestRefreshToken();
        return axios(originalRequest);
      } catch (refreshError) {
        store.dispatch(logoutUser());
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
