import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import premativeDataSlice from "./premativeDataSlice"
import promptDataSlice from "./promptDataSlice"

const store = configureStore({
  reducer: {
    data: dataReducer,
    premativeData: premativeDataSlice,
    promptData: promptDataSlice,

  },
});

export default store;