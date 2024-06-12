import { configureStore } from "@reduxjs/toolkit";
import calReducer from "./slices/calculatorSlice.ts";

const store = configureStore({
  reducer: {
    calculator: calReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
