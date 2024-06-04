import * as S from "@/components/Header/style";

export const HeaderMain = ({ children }: React.PropsWithChildren) => {
  return <S.Header>{children}</S.Header>;
};

export const Title = ({ text }: { text: string }) => {
  return <S.Title>{text}</S.Title>;
};

const Header = Object.assign(HeaderMain, {
  Title,
});

export default Header;
