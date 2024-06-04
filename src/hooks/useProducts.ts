import { Product } from "@/types/products";
import { useState } from "react";
import { getProducts } from "@/apis/product";
import { Category, Sort } from "@/constants/selectOption";
import PRODUCT from "@/constants/product";
import useMutation from "@/hooks/useMutation";
import { ERROR_MESSAGES } from "@/constants/messages";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const { mutate: getProductsMutate, isLoading } = useMutation<typeof getProducts>(
    getProducts,
    ERROR_MESSAGES.failGetProducts
  );

  const fetchProductPage = async (category: Category, page: number, sort: Sort) => {
    const size = page === 0 ? PRODUCT.firstPageItemCount : PRODUCT.subsequentPageItemCount;

    const res = await getProductsMutate({ category, page, size, sort });
    if (!res) return;
    if (res.last) setIsLastPage(true);

    setProducts((prevProducts) => (page === 0 ? res.content : [...prevProducts, ...res.content]));

    setCurrentPage(page + 1);
  };

  const isAbleFetchNextPage = !isLoading && !isLastPage;

  return { products, fetchProductPage, isLoading, currentPage, isLastPage, isAbleFetchNextPage };
};

export default useProducts;
