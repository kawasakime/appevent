import { createSlice } from "@reduxjs/toolkit";
import { CartSliceState } from "../../interfaces/slices";
import { saveCartToLS } from "../../utils/cart";

const cartItems = localStorage.getItem("cart");

const initialState = {
  products: cartItems ? JSON.parse(cartItems) : [],
  count: cartItems ? JSON.parse(cartItems).length : 0,
} as CartSliceState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      const findedIndex = state.products.findIndex((item) => item.id === payload.id);

      if (findedIndex !== -1) {
        state.products = state.products.map((item, index) =>
          index === findedIndex ? { ...item, count: item.count + 1 } : item
        );
      } else {
        state.products = [...state.products, payload];
      }

      state.count += 1;
      saveCartToLS(state.products);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
