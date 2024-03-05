import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface State {
  count: number;
  double: number;
}

const initialState: State = {
  count: 0,
  double: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => {
      state.count += 1;
      state.double = state.count * 2;
    },
  },
  selectors: {
    count: (state) => state.count,
    double: (state) => state.double,
  },
});

export const { incremented } = counterSlice.actions;
export const { count, double } = counterSlice.selectors;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
const rootReducer = combineSlices(counterSlice);
export type RootState = ReturnType<typeof rootReducer>;
export const useCount = () => useSelector((state: State) => state.count);
export const useDouble = () => useSelector((state: State) => state.double);
