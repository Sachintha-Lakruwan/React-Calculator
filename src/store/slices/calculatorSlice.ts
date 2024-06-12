import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  expression: string;
};

const initialState = {
  expression: "0",
};

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    pressButton: (state, action: PayloadAction<string>) => {
      state.expression = action.payload;
    },
    pressZero: (state) => {
      state.expression = "0";
    },
    pressDot: (state) => {
      state.expression = ".";
    },
    pressMinus: (state) => {
      state.expression = "-";
    },
    pressDel: (state) => {
      state.expression = "del";
    },
    pressPlus: (state) => {
      state.expression = "+";
    },
    pressX: (state) => {
      state.expression = "x";
    },
    pressDivide: (state) => {
      state.expression = "/";
    },
    pressReset: (state) => {
      state.expression = initialState.expression;
    },
    pressEqual: (state) => {
      state.expression = "=";
    },
  },
});

export default calSlice.reducer;
export const {
  pressButton,
  pressZero,
  pressDot,
  pressMinus,
  pressPlus,
  pressDivide,
  pressX,
  pressReset,
  pressEqual,
  pressDel,
} = calSlice.actions;
