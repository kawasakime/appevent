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
      const findedIndex = state.products.findIndex((product) => product.id === payload.id);

      if (findedIndex !== -1) {
        state.products = state.products.map((product, index) =>
          index === findedIndex ? { ...product, count: product.count + 1 } : product
        );
      } else {
        state.products = [...state.products, { ...payload, count: 1 }];
      }

      state.count += 1;
      saveCartToLS(state.products);
    },
    removeItemFromCart(state, { payload }) {
      state.products = state.products.filter((product) => product.id !== payload);
      state.count -= state.products.find((product) => product.id === payload)?.count ?? 1;
      saveCartToLS(state.products);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
