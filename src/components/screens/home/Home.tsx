import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Search from "../../search/Search";

import Table from "../../ui/table/Table";
import ProductsService from "../../../services/products.service";
import { getPageCount } from "../../../utils/getPageCount";
import { getPagesArray } from "../../../utils/getPagesArray";
import Pagination from "../../ui/pagination/Pagination";
import { useFetching } from "../../../hooks/useFetching";
import { options } from "../../../data/options.data";
import Sorting from "../../ui/sorting/Sorting";
import { useProducts } from "../../../hooks/useProducts";
import Loading from "../../loading/Loading";
import { IProduct } from "../../../models/IProduct";

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);
  const limit = 20;
  const [page, setPage] = useState(1);

  const [fetchProducts, isLoading, error] = useFetching(async () => {
    const response = await ProductsService.getAll(limit, page);
    setProducts(response.data.products);
    const totalCount = response.data.total;
    setTotal(getPageCount(totalCount, limit));
  });

  let pagesArray = getPagesArray(total);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSerachQuery] = useState("");

  const sortedAndSearchedProducts = useProducts(
    products,
    selectedSort,
    searchQuery
  );

  const sortProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    setSelectedSort(sort);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Таблица продуктов</h1>
      <div className={styles.options}>
        <Search
          value={searchQuery}
          onChange={(event) => setSerachQuery(event.target.value)}
        />
        <Sorting
          options={options}
          value={selectedSort}
          onChange={(event) => sortProducts(event)}
        />
      </div>

      {isLoading ? (
        <Loading />
      ) : sortedAndSearchedProducts.length ? (
        <>
          <Table products={sortedAndSearchedProducts} />
          <Pagination
            arrayPages={pagesArray}
            pageCurrent={page}
            setPage={setPage}
          />
        </>
      ) : (
        <h1 className={styles.title}>
          {error ? `Ошибка запроса!` : `Продукты не найдены!`}
        </h1>
      )}
    </section>
  );
}

export default Home;
