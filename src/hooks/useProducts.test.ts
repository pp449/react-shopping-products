import useProducts from "@/hooks/useProducts";
import { renderHook, waitFor, act } from "@testing-library/react";

describe("useProducts 테스트", () => {
  it("상품 목록을 조회 시 첫 페이지는 20개의 상품을 불러온다.", async () => {
    const { result } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProductPage("전체", 0, "낮은 가격순");
    });

    await waitFor(() => {
      expect(result.current.products).toHaveLength(20);
    });
  });

  it("상품 목록 조회 시 첫 페이지 이외에는 페이지는 4개의 아이템을 불러온다.", async () => {
    const { result } = renderHook(() => useProducts());

    act(() => {
      result.current.fetchProductPage("전체", 0, "낮은 가격순");
    });

    await waitFor(() => {
      expect(result.current.products).toHaveLength(20);
      expect(result.current.currentPage).toBe(1);
    });

    act(() => {
      result.current.fetchProductPage("도서", 1, "낮은 가격순");
    });

    await waitFor(() => {
      expect(result.current.products).toHaveLength(24);
      expect(result.current.currentPage).toBe(2);
    });
  });
});
