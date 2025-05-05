import { Plan, Portfolio, Project } from "@/types/data-types";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface State {
  loading: boolean;
  data: Portfolio[];
}

const initialState: State = {
  loading: false,
  data: [],
};

const portfolioSlices = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPortfolioLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setPortfolio: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState); // THIS LINE
  },
});

export const { setPortfolio, setPortfolioLoading } = portfolioSlices.actions;
export default portfolioSlices.reducer;
