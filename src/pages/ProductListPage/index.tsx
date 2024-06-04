import CartBadge from "@/components/CartBadge";
import Header from "@/components/Header";
import TextBox from "@/components/_common/TextBox";
import SelectBox from "@/components/SelectBox";
import { CATEGORY, Category, SORT, Sort } from "@/constants/selectOption";
import ItemCardList from "@/components/ItemCardList";
import useSelect from "@/hooks/useSelect";
import { useEffect } from "react";
import useProducts from "@/hooks/useProducts";
import ItemCartListSkeleton from "@/components/ItemCardList/Skeleton";
import * as S from "@/pages/ProductListPage/style";
import InfiniteScroll from "@/components/_common/InfiniteScroll";

const ProductListPage = () => {
  const useCategorySelect = useSelect<Category>("전체");
  const useSortSelect = useSelect<Sort>("낮은 가격순");

  const { products, fetchProductPage, currentPage, isLoading, isLastPage, isAbleFetchNextPage } = useProducts();

  const category = useCategorySelect.selected;
  const sort = useSortSelect.selected;

  const fetchScrollProduct = () => {
    if (isLastPage) return;
    fetchProductPage(category, currentPage, sort);
  };

  useEffect(() => {
    fetchProductPage(category, 0, sort);
  }, [category, sort]);

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
            <SelectBox selectorHook={useCategorySelect} optionsContents={Object.keys(CATEGORY)} />
            <SelectBox selectorHook={useSortSelect} optionsContents={Object.keys(SORT)} />
          </S.SelectBoxWrapper>
        </S.ItemInfoWrapper>
        <InfiniteScroll fetchingFunction={fetchScrollProduct} isAbleFetchNextPage={isAbleFetchNextPage}>
          <ItemCardList products={products} isLoading={isLoading} />
        </InfiniteScroll>
        {isLoading && <ItemCartListSkeleton />}
      </S.Wrapper>
    </>
  );
};

export default ProductListPage;
