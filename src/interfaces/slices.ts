import { ResponseCatalogItem } from "./backend";

export interface CatalogSliceState {
  products: ResponseCatalogItem[] | null;
}

export interface CartItem extends ResponseCatalogItem {
  count: number;
}

export interface CartSliceState {
  products: CartItem[];
  count: number;
}
