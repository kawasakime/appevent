import { useEffect, useMemo, useState } from "react";
import Catalog from "../components/Catalog";
import { ITEMS_ON_PAGE } from "../data/constants";
import { useAppSelector } from "../redux/hooks";
import { useLazyGetCatalogItemsQuery } from "../redux/services/mainApi";
import Pagination from "../components/Pagination";
import PageHeader from "../components/UI/PageHeader";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const products = useAppSelector((state) => state.catalog.products);
  const [getProducts] = useLazyGetCatalogItemsQuery();
  const [page, setPage] = useState(0);

  const pagesCount = useMemo(() => {
    return Math.ceil((products?.length ?? ITEMS_ON_PAGE) / ITEMS_ON_PAGE);
  }, [products]);

  const handleChangePage = (num: number) => {
    setPage(num);
  };

  useEffect(() => {
    // Имитация долгого получения данных
    setTimeout(() => {
      getProducts();
    }, 2000);
  }, []);

  return (
    <div className="page wrapper">
      <PageHeader title="Каталог" />
      {products ? (
        <Catalog items={products} page={page} countOnPage={ITEMS_ON_PAGE} />
      ) : (
        <Skeleton
          inline={true}
          containerClassName="skeleton__container"
          className="skeleton__container__item"
          count={6}
        />
      )}

      {products && <Pagination currentPage={page} pagesCount={pagesCount} onChangePage={handleChangePage} />}
    </div>
  );
};

export default Home;
