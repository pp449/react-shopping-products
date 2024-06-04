import { TextType } from "@/components/_common/TextBox";
import styled from "styled-components";

export const CaptionText = styled.span<{ disabled: boolean; type: TextType }>`
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ theme, type }) => theme.TEXT[type]};
  color: ${({ theme, disabled }) => disabled && theme.COLOR["grey-2"]};
`;
