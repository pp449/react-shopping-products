import Icon from "@/components/_common/Icon";
import * as S from "@/components/CartBadge/style";
import { END_POINT } from "@/config/endPoint";
import { CartItemContext } from "@/provider/cartItemProvider";
import { useContext } from "react";

const CartBadge = () => {
  const cartItems = useContext(CartItemContext);

  return (
    <S.Container onClick={() => (window.location.href = END_POINT.cartItemPage)}>
      <Icon kind="cart" />
      {cartItems.length !== 0 && (
        <S.Badge>
          <S.BadgeNumber>{cartItems.length}</S.BadgeNumber>
        </S.Badge>
      )}
    </S.Container>
  );
};

export default CartBadge;
