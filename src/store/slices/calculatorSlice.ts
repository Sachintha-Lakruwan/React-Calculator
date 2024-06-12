import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  expression: string;
};

const initialState = {
  expression: "0",
};

const operators = ["+", "*", "-", "/"];

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    pressButton: (state, action: PayloadAction<string>) => {
      if (state.expression === "0") {
        state.expression = action.payload;
        return;
      }
      const length = state.expression.length;
      if (
        length > 2 &&
        state.expression[length - 1] === "0" &&
        operators.includes(state.expression[length - 2])
      ) {
        state.expression = state.expression.slice(0, -1) + action.payload;
        return;
      }

      state.expression = state.expression + action.payload;
    },
    pressDot: (state) => {
      // 34.44.3
      const length = state.expression.length;
      if (operators.includes(state.expression[length - 1])) {
        return;
      }
      state.expression = state.expression + ".";
    },
    pressMinus: (state) => {
      const length = state.expression.length;
      if (operators.includes(state.expression[length - 1])) {
        return;
      }
      state.expression = state.expression + "-";
    },
    pressDel: (state) => {
      if (state.expression.length === 1) {
        state.expression = initialState.expression;
        return;
      }
      state.expression = state.expression.slice(0, -1);
    },
    pressPlus: (state) => {
      const length = state.expression.length;
      if (operators.includes(state.expression[length - 1])) {
        return;
      }
      state.expression = state.expression + "+";
    },
    pressX: (state) => {
      const length = state.expression.length;
      if (operators.includes(state.expression[length - 1])) {
        return;
      }
      state.expression = state.expression + "*";
    },
    pressDivide: (state) => {
      const length = state.expression.length;
      if (operators.includes(state.expression[length - 1])) {
        return;
      }
      state.expression = state.expression + "/";
    },
    pressReset: (state) => {
      state.expression = initialState.expression;
    },
    pressEqual: (state) => {
      state.expression = eval(state.expression);
    },
  },
});

export default calSlice.reducer;
export const {
  pressButton,
  pressDot,
  pressMinus,
  pressPlus,
  pressDivide,
  pressX,
  pressReset,
  pressEqual,
  pressDel,
} = calSlice.actions;
