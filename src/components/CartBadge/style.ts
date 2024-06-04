import { flexCenter } from "@/styles/common";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 30px;
`;

export const Badge = styled.div`
  position: absolute;
  right: 4px;
  top: 10px;
  width: 19px;
  height: 19px;
  background-color: ${({ theme }) => theme.COLOR.white};
  border-radius: 50%;
  color: black;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  ${flexCenter};
`;

export const BadgeNumber = styled.span`
  display: flex;
  align-items: center;
`;
