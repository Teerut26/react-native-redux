import { combineReducers, createStore } from "@reduxjs/toolkit";
import countSlice, { initialStateInterface } from "./slice/countSlice";

export interface RootState {
  countSlice: initialStateInterface;
}

const rootReducer = combineReducers({
  countSlice: countSlice,
});

const store = createStore(rootReducer);

export { store };
