import { Skeleton } from "@/styles/common";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 15px;
  width: 182px;
  height: 224px;
  border-radius: 8px;

  @media screen and (max-width: 400px) {
    width: 160px;
    height: 210px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0 0;
  ${Skeleton}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 50%;
  padding-right: 8px;
`;

export const TextWrapper = styled.div`
  padding: 15px 8px 15px 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextBox = styled.div`
  width: 60px;
  height: 24px;
  ${Skeleton}
  border-radius: 5px;
`;

export const TextBoxLong = styled.div`
  width: 100px;
  height: 20px;
  ${Skeleton}
  border-radius: 5px;
`;
