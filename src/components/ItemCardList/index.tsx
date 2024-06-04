import ItemCard from "@/components/ItemCard";
import styled from "styled-components";
import { flexCenter } from "@/styles/common";
import { Product } from "@/types/products";
import SeaOtterVideo from "@/components/SeaOtterVideo";

const ItemCardList = ({ products, isLoading }: { products: Product[]; isLoading: boolean }) => {
  return (
    <ItemCardWrapper>
      {products.length || isLoading ? (
        products.map((product) => <ItemCard key={Math.random() * 10000} product={product} />)
      ) : (
        <>
          <SeaOtterVideo />
          <h2>🦦 눈 씻고 찾아봐도 상품이 없어요.. ㅠㅠ</h2>
        </>
      )}
    </ItemCardWrapper>
  );
};

export default ItemCardList;

const ItemCardWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  ${flexCenter}
`;
