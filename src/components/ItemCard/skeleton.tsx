import * as Sk from "@/components/ItemCard/skeleton.style";

const ItemCardSkeleton = () => {
  return (
    <Sk.Wrapper>
      <Sk.Image />
      <Sk.TextWrapper>
        <Sk.TextBoxLong />
        <Sk.TextBoxLong />
      </Sk.TextWrapper>
      <Sk.ButtonWrapper>
        <Sk.TextBox />
      </Sk.ButtonWrapper>
    </Sk.Wrapper>
  );
};

export default ItemCardSkeleton;
