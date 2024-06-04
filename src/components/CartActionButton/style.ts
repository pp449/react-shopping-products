import { flexCenter } from "@/styles/common";
import styled from "styled-components";

export const ButtonWrapper = styled.button<{ isInCart: boolean }>`
  ${flexCenter};
  width: 59px;
  height: 24px;
  padding: 4px 8px 4px 8px;
  gap: 4px;
  border-radius: 4px;
  opacity: 0px;
  background-color: ${({ isInCart, theme }) => (isInCart ? theme.COLOR["grey1"] : theme.COLOR.black)};
  color: ${({ isInCart, theme }) => (isInCart ? theme.COLOR.black : theme.COLOR.white)};
  cursor: pointer;
`;
