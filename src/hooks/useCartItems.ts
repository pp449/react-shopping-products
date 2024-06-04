import { getCartItems } from "@/apis/cartItem";
import { ERROR_MESSAGES } from "@/constants/messages";
import useMutation from "@/hooks/useMutation";
import { CartItems } from "@/types/products";
import { useState, useEffect } from "react";

const useCartItems = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const { mutate: getCartItemsMutate } = useMutation<typeof getCartItems>(
    getCartItems,
    ERROR_MESSAGES.failGetCartItems
  );

  const getCartItemList = async () => {
    const res = await getCartItemsMutate();
    if (!res) return;

    setCartItems(res);
  };

  useEffect(() => {
    getCartItemList();
  }, []);

  return { cartItems, setCartItems };
};

export default useCartItems;
