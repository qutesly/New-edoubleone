import { PaymentMethod, User } from "@/types/data-types";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthState {
  loading: boolean;
  openDrawer: boolean;
  loggedIn: boolean;
  data: User | null;
  paymentMethods: PaymentMethod[];
  token?: string;
}

const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  paymentMethods: [],
  data: null,
  openDrawer: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },

    setAuthData: (state, { payload }) => {
      state.data = payload;
    },
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    toggleDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
    setPaymentMethods: (state, { payload }) => {
      state.paymentMethods = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState); // THIS LINE
  },
});

export const {
  setLoggedIn,
  setAuthLoading,
  setAuthData,
  setToken,
  toggleDrawer,
  setPaymentMethods,
} = authSlice.actions;
export default authSlice.reducer;
