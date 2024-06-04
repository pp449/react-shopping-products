import { http, HttpResponse } from "msw";
import SERVER_URL from "@/config/serverUrl";
import products from "@/mocks/mockResponse/products.json";
import { END_POINT } from "@/config/endPoint";

export const productsHandler = [
  http.get(SERVER_URL.apiUrl + END_POINT.products, ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get("page"));
    const limit = page === 0 ? 20 : 4;

    const paginatedProducts = products.content.slice(0, limit);
    products.content = paginatedProducts;

    return HttpResponse.json(products);
  }),
];
