import { combineReducers } from "@reduxjs/toolkit";
import catalogSlice from "./slices/catalogSlice";
import { mainApi } from "./services/mainApi";
import cartSlice from "./slices/cartSlice";

export const rootReducer = combineReducers({
  catalog: catalogSlice,
  cart: cartSlice,
  [mainApi.reducerPath]: mainApi.reducer,
});
