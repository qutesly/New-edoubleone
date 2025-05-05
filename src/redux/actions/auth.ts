import client from "@/api/client";
import { SignUpForm } from "@/types";
import { errorMessage, showMessage } from "@/utils/utility";
import {
  setAuthLoading,
  setLoggedIn,
  setPaymentMethods,
  setToken,
} from "../slices/authSlices";
import { AppDispatch, persistor } from "../store";

const handleError = (error: any, dispatch: AppDispatch) => {
  dispatch(setAuthLoading(false));
  showMessage({
    variant: "error",
    message: errorMessage(error),
  });
  return {
    success: false,
    error: errorMessage(error),
  };
};

export const signup = (data: SignUpForm) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAuthLoading(true));
    const res = (await client.post("/auth/register", data)).data;
    dispatch(login(data));
    return {
      success: true,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};

export const login =
  (data: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoading(true));
      const res = (await client.post("/auth/login", data)).data;
      dispatch(setToken(res.token));
      dispatch(setLoggedIn(true));
      dispatch(setAuthLoading(false));
      return {
        success: true,
      };
    } catch (error) {
      return { ...handleError(error, dispatch) };
    }
  };
export const logout = () => async (dispatch: AppDispatch) => {
  await persistor.purge();
};

export const getPaymentMethods = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAuthLoading(true));
    const res = (await client.get("/client/payment/methods")).data;
    dispatch(setPaymentMethods(res.payment_methods));
    dispatch(setAuthLoading(false));
    return {
      success: true,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};
