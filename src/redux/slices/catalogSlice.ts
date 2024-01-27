import { createSlice } from "@reduxjs/toolkit";
import { mainApi } from "../services/mainApi";
import { CatalogSliceState } from "../../interfaces/slices";

const initialState = {
  products: null,
} as CatalogSliceState;

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(mainApi.endpoints.getCatalogItems.matchFulfilled, (state, { payload }) => {
      state.products = payload.items;
    });
  },
});

// export const {} = catalogSlice.actions;
export default catalogSlice.reducer;
