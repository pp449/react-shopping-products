import { END_POINT } from "@/config/endPoint";
import { ERROR_MESSAGES } from "@/constants/messages";
import { basicToken } from "@/utils/auth";
import { CartItems } from "@/types/products";
import SERVER_URL from "@/config/serverUrl";

export const getCartItems = async (): Promise<CartItems[]> => {
  const response = await fetch(SERVER_URL.apiUrl + END_POINT.cartItems, {
    method: "get",
    headers: { Authorization: basicToken },
  });

  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.failGetCartItems);
  }

  const data = await response.json();
  return data.content;
};

export async function postCartItem({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}): Promise<Response> {
  const response = await fetch(`${SERVER_URL.apiUrl + END_POINT.cartItems}`, {
    method: "POST",
    headers: { Authorization: basicToken, "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  });

  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.failPostCartItem);
  }

  return response;
}

export async function deleteCartItem({ itemId }: { itemId: number }): Promise<Response> {
  const response = await fetch(`${SERVER_URL.apiUrl + END_POINT.cartItems}/${itemId}`, {
    method: "DELETE",
    headers: { Authorization: basicToken, "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.failDeleteCartItem);
  }

  return response;
}
