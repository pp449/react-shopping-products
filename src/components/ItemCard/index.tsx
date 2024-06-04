import { Product } from "@/types/products";
import ItemInfo from "@/components/ItemInfo";
import * as S from "@/components/ItemCard/style";
import CartActionButton from "@/components/CartActionButton";
import useHandleCartItem from "@/hooks/useHandleCartItem";

interface ItemCartProps {
  product: Product;
}

const ItemCard = ({ product }: ItemCartProps) => {
  const { name, price, imageUrl, id } = product;
  const { onClickCartItem, isInCart } = useHandleCartItem();

  return (
    <S.Wrapper>
      <S.Image $imgUrl={imageUrl} />
      <ItemInfo name={name} price={price} />
      <S.ButtonWrapper>
        <CartActionButton isInCart={isInCart(id)} onClick={() => onClickCartItem(id)} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default ItemCard;
