import { END_POINT } from "@/config/endPoint";
import { ERROR_MESSAGES } from "@/constants/messages";
import { ResponseProduct } from "@/types/products";
import { Category, SORT, Sort } from "@/constants/selectOption";
import { CATEGORY } from "@/constants/selectOption";
import urlFormatter from "@/utils/urlFormatter";

interface getProductsProps {
  category: Category;
  page: number;
  size: number;
  sort: Sort;
}

export const getProducts = async ({ category, page, size, sort }: getProductsProps): Promise<ResponseProduct> => {
  const convertedCategory = CATEGORY[category];
  const convertedSort = SORT[sort];

  const params = {
    page: page.toString(),
    size: size.toString(),
    sort: convertedSort,
  };

  const searchParams = new URLSearchParams(params);

  if (category !== "전체") {
    searchParams.append("category", convertedCategory);
  }

  const formattedURL = urlFormatter(END_POINT.products, searchParams.toString());
  const response = await fetch(formattedURL);

  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.failGetProducts);
  }

  const data = await response.json();
  return data;
};
