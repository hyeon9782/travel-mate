import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function createInstanceWithInterceptor() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithInterceptor();
