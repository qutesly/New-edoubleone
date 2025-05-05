import client from "@/api/client";
import { errorMessage, showMessage } from "@/utils/utility";
import { setAllPlans, setMyPlans, setPlanLoading } from "../slices/planSlices";
import { AppDispatch } from "../store";
import { setPortfolio, setPortfolioLoading } from "../slices/portfolioSlices";

const handleError = (error: any, dispatch: AppDispatch) => {
  dispatch(setPortfolioLoading(false));
  showMessage({
    variant: "error",
    message: errorMessage(error),
  });
  return {
    success: false,
    error: errorMessage(error),
  };
};

export const getPortfolio = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPortfolioLoading(true));
    const res = (await client.get("portfolios")).data?.data;
    dispatch(setPortfolioLoading(false));
    dispatch(setPortfolio(res));
    return {
      success: true,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};
