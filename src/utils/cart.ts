import { CartItem } from "../interfaces/slices";

export const saveCartToLS = (items: CartItem[]) => localStorage.setItem("cart", JSON.stringify(items));
