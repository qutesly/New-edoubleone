import client from "@/api/client";
import { errorMessage, showMessage } from "@/utils/utility";
import { setAllPlans, setMyPlans, setPlanLoading } from "../slices/planSlices";
import { AppDispatch } from "../store";

const handleError = (error: any, dispatch: AppDispatch) => {
  dispatch(setPlanLoading(false));
  showMessage({
    variant: "error",
    message: errorMessage(error),
  });
  return {
    success: false,
    error: errorMessage(error),
  };
};

export const getAllPlans = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPlanLoading(true));
    const res = (await client.get("plans")).data?.data;
    dispatch(setPlanLoading(false));
    dispatch(setAllPlans(res));
    return {
      success: true,
      data: res,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};

export const createProject = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPlanLoading(true));
    const res = (await client.post("client/projects", data)).data;
    dispatch(setPlanLoading(false));
    // dispatch(setAllPlans(res));
    return {
      success: true,
      data: res,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};
export const getMyProjects = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPlanLoading(true));
    const res = (await client.get("client/projects")).data?.data;
    dispatch(setPlanLoading(false));
    dispatch(setMyPlans(res));
    return {
      success: true,
      data: res,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};
