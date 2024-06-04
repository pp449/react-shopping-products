import Icon from "@/components/_common/Icon";
import TextBox from "@/components/_common/TextBox";
import * as S from "@/components/CartActionButton/style";

interface CartActionButton {
  isInCart: boolean;
  onClick: () => void;
}

const CartActionButton = ({ isInCart, onClick }: CartActionButton) => {
  const iconKind = isInCart ? "deleteCart" : "addCart";
  const buttonText = isInCart ? "빼기" : "담기";

  return (
    <S.ButtonWrapper onClick={onClick} isInCart={isInCart}>
      <Icon kind={iconKind} />
      <TextBox text={buttonText} type="xSmall" />
    </S.ButtonWrapper>
  );
};

export default CartActionButton;
