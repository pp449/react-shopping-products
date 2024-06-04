import { flexCenter } from "@/styles/common";
import styled, { keyframes } from "styled-components";

export const toastSlideIn = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

export const toastSlideOut = keyframes`
  from{
    opacity: 1;
  }to{
    opacity: 0;
  }
`;

export const Wrapper = styled.div<{ isClose: boolean }>`
  height: 30px;
  background-color: #ec4a9b;
  color: white;
  font-weight: 700;
  border-radius: 0 0 3px 3px;
  animation: ${({ isClose }) => (isClose ? toastSlideOut : toastSlideIn)} 0.4s ease-in-out forwards;
  ${flexCenter}

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 429px;
  }
`;
