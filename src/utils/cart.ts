import { CartItemElement } from "../interfaces/props";

export const saveCartToLS = (items: CartItemElement[]) => localStorage.setItem("cart", JSON.stringify(items));

export const calcTotalPrice = (items: CartItemElement[]) =>
  items.reduce((total, currentItem) => total + currentItem.price * currentItem.count, 0);
