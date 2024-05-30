import CartBadge from "@/components/CartBadge";
import Header from "@/components/Header";
import TextBox from "@/components/_common/TextBox";
import SelectBox from "@/components/SelectBox";
import { CATEGORY, Category, SORT, Sort } from "@/constants/selectOption";
import ItemCardList from "@/components/ItemCardList";
import useSelect from "@/hooks/useSelect";
import { useEffect, useRef } from "react";
import useProducts from "@/hooks/useProducts";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import ItemCartListSkeleton from "@/components/ItemCardList/Skeleton";
import * as S from "@/pages/ProductListPage/style";

const ProductListPage = () => {
  const useCategorySelect = useSelect<Category>("전체");
  const useSortSelect = useSelect<Sort>("낮은 가격순");

  const { products, fetchFirstPage, fetchNextPage, currentPage, loading, isLastPage } = useProducts();
  const ref = useRef<HTMLDivElement>(null);

  const { isIntersecting } = useInfiniteScroll({ threshold: 0.25, rootMargin: "80px" }, ref);

  const category = useCategorySelect.selected;
  const sort = useSortSelect.selected;

  useEffect(() => {
    if (isIntersecting && !isLastPage) {
      fetchNextPage(category, currentPage, sort);
    }
  }, [isIntersecting]);

  useEffect(() => {
    fetchFirstPage(category, 0, sort);
  }, [category, sort]);

  const isAbleFetchNextPage = !loading && !isLastPage;

  return (
    <>
      <Header>
        <Header.Title text="SHOP" />
        <CartBadge />
      </Header>
      <S.Wrapper>
        <S.ItemInfoWrapper>
          <TextBox type="xLarge" text="bpple 상품 목록" />
          <S.SelectBoxWrapper>
            <SelectBox useSelector={useCategorySelect} optionsContents={Object.keys(CATEGORY)} />
            <SelectBox useSelector={useSortSelect} optionsContents={Object.keys(SORT)} />
          </S.SelectBoxWrapper>
        </S.ItemInfoWrapper>
        <ItemCardList products={products} />
        {isAbleFetchNextPage && <div ref={ref}></div>}
        {loading && <ItemCartListSkeleton />}
      </S.Wrapper>
    </>
  );
};

export default ProductListPage;
