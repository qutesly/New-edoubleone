"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import authSlices from "./slices/authSlices";
import planSlices from "./slices/planSlices";
import portfolio from "./slices/portfolioSlices";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const reducers = combineReducers({
  auth: authSlices,
  plan: planSlices,
  portfolio: portfolio,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare({
      serializableCheck: false,
    }).concat(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const RProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default store;
