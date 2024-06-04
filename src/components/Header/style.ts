import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 64px;

  padding: 24px;
  display: flex;
  align-items: center;

  background-color: #000000;
  color: #ffffff;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 429px;
  }
`;

export const Title = styled.span`
  ${({ theme }) => theme.TEXT.xLarge};
`;
