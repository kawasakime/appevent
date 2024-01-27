export interface ResponseCatalog {
  items: ResponseCatalogItem[];
}

export interface ResponseCatalogItem {
  id: number;
  image: string;
  name: string;
  price: number;
}
