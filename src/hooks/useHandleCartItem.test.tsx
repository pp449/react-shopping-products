import useHandleCartItem from "@/hooks/useHandleCartItem";
import CartItemProvider from "@/provider/cartItemProvider";
import { renderHook, act, waitFor } from "@testing-library/react";

describe("장바구니 관련 테스트", () => {
  it("장바구니에 있는 아이템 담기 버튼을 누르면 장바구니에서 추가된다.", async () => {
    const { result } = renderHook(() => useHandleCartItem(), {
      wrapper: ({ children }) => <CartItemProvider>{children}</CartItemProvider>,
    });

    const cartId = 777;

    expect(result.current.isInCart(cartId)).toBe(false);

    await act(() => {
      result.current.onClickCartItem(cartId);
    });

    expect(result.current.isInCart(cartId)).toBe(true);
  });

  it("장바구니에 있는 아이템 빼기 버튼을 누르면 장바구니에서 제거된다.", async () => {
    const { result } = renderHook(() => useHandleCartItem(), {
      wrapper: ({ children }) => <CartItemProvider>{children}</CartItemProvider>,
    });

    const productId = 2;
    const cartId = 3168;

    await waitFor(() => {
      expect(result.current.isInCart(productId)).toBe(true);
    });

    act(() => {
      result.current.onClickCartItem(cartId);
    });

    expect(result.current.isInCart(cartId)).toBe(false);
  });
});
