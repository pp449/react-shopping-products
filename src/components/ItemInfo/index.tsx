import TextBox from "@/components/_common/TextBox";
import * as S from "@/components/ItemInfo/style";
interface ItemInfoProps {
  name: string;
  description?: string;
  price: number;
}

const ItemInfo = ({ name, price }: ItemInfoProps) => {
  return (
    <S.Wrapper>
      <TextBox text={name} type={"semiSmall"} />
      <TextBox text={`${price.toLocaleString()}원`} type={"xSmall"} />
    </S.Wrapper>
  );
};

export default ItemInfo;
