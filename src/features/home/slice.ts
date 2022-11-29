import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  authen: string;
}

const initialState: CounterState = {
  value: 0,
  authen: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    setAuthen(state, action: PayloadAction<string>) {
      state.authen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;
