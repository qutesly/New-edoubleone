import axios from "axios";

import config from "./config";
import store from "@/redux/store";
import { setLoggedIn } from "@/redux/slices/authSlices";
import { errorMessage } from "@/utils/utility";
import { logout } from "@/redux/actions/auth";

const client = axios.create({
  baseURL: config.baseUrl,
  timeout: 100000,
  headers: {
    common: {
      Accept: "*/*",
      channel: "MOBILE",
      "Content-Type": "application/json",
    },
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response)
      return Promise.reject(
        new Error("Unable to connect to our servers. Please try again")
      );
    if (error.code === "ECONNABORTED")
      return Promise.reject(
        new Error("Your request is taking too long, please try again later")
      );
    const statuses = [401, 403];
    if (
      statuses.includes(error?.response?.status) &&
      store.getState().auth.loggedIn
    ) {
      const { dispatch } = store;
      dispatch(logout());
      return Promise.reject(new Error("Session has timed out"));
    } else if (
      errorMessage(error).includes("403") ||
      errorMessage(error).includes("401")
    ) {
      return Promise.reject(new Error("Session has expired due to inactivity"));
    } else if (errorMessage(error).includes("502"))
      return Promise.reject(
        new Error("Something went wrong, please try again later")
      );
    return Promise.reject(error);
  }
);

export default client;
