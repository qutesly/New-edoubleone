import { Plan, Project } from "@/types/data-types";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface State {
  loading: boolean;
  allPlans: Plan[];
  myPlans: Project[];
}

const initialState: State = {
  loading: false,
  allPlans: [],
  myPlans: [],
};

const planSlices = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlanLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setAllPlans: (state, { payload }) => {
      state.allPlans = payload;
    },
    setMyPlans: (state, { payload }) => {
      state.myPlans = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState); // THIS LINE
  },
});

export const { setPlanLoading, setMyPlans, setAllPlans } = planSlices.actions;
export default planSlices.reducer;
