import { END_POINT } from "@/config/endPoint";
import SERVER_URL from "@/config/serverUrl";
import { HttpResponse, http } from "msw";
import cartItems from "@/mocks/mockResponse/cart-items.json";

export const cartItemsHandler = [
  http.get(SERVER_URL.apiUrl + END_POINT.cartItems, () => {
    return HttpResponse.json(cartItems, { status: 200 });
  }),
  http.post(SERVER_URL.apiUrl + END_POINT.cartItems, async ({ request }) => {
    const res = (await request.json()) as { productId: number; quantity: number };

    const tmpCartItem = {
      id: Math.random() * 10000,
      quantity: 1,
      product: {
        id: res.productId,
        name: "테스트 아이템",
        price: 999,
        imageUrl: "mockImg",
        category: "fashion",
      },
    };

    if (cartItems) cartItems.content.push(tmpCartItem);

    return HttpResponse.json(null, { status: 201 });
  }),
  http.delete(SERVER_URL.apiUrl + END_POINT.cartItems + "/:id", () => {
    return HttpResponse.json(null, { status: 201 });
  }),
];
