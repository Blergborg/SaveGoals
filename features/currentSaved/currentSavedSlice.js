import { createSlice } from "@reduxjs/toolkit";

export const currentSavedSlice = createSlice({
  name: "currentSaved",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  reducers: {
    decrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount, decrementByAmount } =
  currentSavedSlice.actions;

export default currentSavedSlice.reducer;
