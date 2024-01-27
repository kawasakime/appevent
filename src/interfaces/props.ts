import { ResponseCatalogItem } from "./backend";

export interface CatalogProps {
  page: number;
  countOnPage: number;
  items: ResponseCatalogItem[] | null;
}

export interface CatalogCardProps {
  item: ResponseCatalogItem;
}

export interface PaginationProps {
  currentPage: number;
  pagesCount: number;
  onChangePage: (pageNumber: number) => void;
}

export interface OrderButtonProps {
  item: ResponseCatalogItem;
}

export interface PageHeaderProps {
  title: string;
}
