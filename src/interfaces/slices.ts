import { ResponseCatalogItem } from "./backend";
import { CartItemElement } from "./props";

export interface CatalogSliceState {
  products: ResponseCatalogItem[] | null;
}

export interface CartSliceState {
  products: CartItemElement[];
  count: number;
}
