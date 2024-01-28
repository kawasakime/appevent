import { useCallback } from "react";
import { CatalogProps } from "../../interfaces/props";
import CatalogCard from "./CatalogCard";

const Catalog = ({ page, countOnPage, items }: CatalogProps) => {
  const Products = useCallback(() => {
    const slicedItems = items?.slice(page * countOnPage, page * countOnPage + countOnPage);

    return slicedItems!.map((product) => <CatalogCard key={product.id} item={product} />);
  }, [page]);

  return <div className="catalog">{<Products />}</div>;
};

export default Catalog;
