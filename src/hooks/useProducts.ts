import { useMemo } from "react";
import { IProduct } from "../models/IProduct";

export const useSortedProducts = (
  products: IProduct[],
  sort: string
): IProduct[] => {
  const sortedProducts: IProduct[] = useMemo(() => {
    if (sort) {
      return [...products].sort((a, b) =>
        a[sort as keyof IProduct] > b[sort as keyof IProduct] ? -1 : 1
      );
    }
    return products;
  }, [sort, products]);

  return sortedProducts;
};

export const useProducts = (
  products: IProduct[],
  sort: string,
  query: string
): IProduct[] => {
  const sortedProducts = useSortedProducts(products, sort);

  const sortedAndSearchedProducts: IProduct[] = useMemo(() => {
    return sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedProducts]);

  return sortedAndSearchedProducts;
};
