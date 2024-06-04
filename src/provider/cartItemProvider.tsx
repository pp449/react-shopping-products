import useCartItems from "@/hooks/useCartItems";
import { CartItems } from "@/types/products";
import { ReactNode, createContext } from "react";

export const CartItemContext = createContext<CartItems[]>([]);
export const CartItemDispatchContext = createContext<React.Dispatch<React.SetStateAction<CartItems[]>>>(() => {});

const CartItemProvider = ({ children }: { children: ReactNode }) => {
  const { cartItems, setCartItems } = useCartItems();

  return (
    <CartItemContext.Provider value={cartItems}>
      <CartItemDispatchContext.Provider value={setCartItems}>{children}</CartItemDispatchContext.Provider>
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
