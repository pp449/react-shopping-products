import { deleteCartItem, getCartItems, postCartItem } from "@/apis/cartItem";
import { ERROR_MESSAGES } from "@/constants/messages";
import useMutation from "@/hooks/useMutation";
import { CartItemContext, CartItemDispatchContext } from "@/provider/cartItemProvider";
import { useContext } from "react";

const useHandleCartItem = () => {
  const cartItems = useContext(CartItemContext);
  const setCartItems = useContext(CartItemDispatchContext);

  const { mutate: getCartItemsMutate } = useMutation<typeof getCartItems>(
    getCartItems,
    ERROR_MESSAGES.failGetCartItems
  );
  const { mutate: postCartItemMutate } = useMutation<typeof postCartItem>(
    postCartItem,
    ERROR_MESSAGES.failPostCartItem
  );
  const { mutate: deleteCartItemMutate } = useMutation<typeof deleteCartItem>(
    deleteCartItem,
    ERROR_MESSAGES.failDeleteCartItem
  );

  const onAddCartItem = async (id: number) => {
    await postCartItemMutate({ productId: id, quantity: 1 });

    const fetchedItems = await getCartItemsMutate();
    if (fetchedItems) setCartItems(fetchedItems);
  };

  const onDeleteCartItem = async (id: number) => {
    const targetItem = cartItems.find((cartItem) => cartItem.product.id === id);

    await deleteCartItemMutate({ itemId: targetItem!.id });
    setCartItems((cartItems) => cartItems.filter((item) => item !== targetItem));
  };

  const isInCart = (id: number) => {
    return cartItems.some((item) => item.product.id === id);
  };

  const onClickCartItem = (id: number) => {
    if (isInCart(id)) onDeleteCartItem(id);
    else onAddCartItem(id);
  };

  return { onClickCartItem, isInCart };
};

export default useHandleCartItem;
