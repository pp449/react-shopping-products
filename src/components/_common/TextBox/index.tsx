import Icon from "@/components/_common/Icon";
import * as S from "@/components/_common/TextBox/style";
import { IconKind } from "@/types/IconKind";

export type TextType = "xLarge" | "large" | "medium" | "small" | "xSmall" | "semiSmall";

interface TextBoxProps {
  iconKind?: IconKind;
  text: string;
  type: TextType;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const TextBox = ({ iconKind, text, type, style, disabled = false }: TextBoxProps) => {
  return (
    <S.CaptionText type={type} style={style} disabled={disabled}>
      {iconKind && <Icon kind={iconKind} />}
      {text}
    </S.CaptionText>
  );
};

export default TextBox;
