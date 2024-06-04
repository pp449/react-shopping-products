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

export const Image = styled.div<{ $imgUrl: string }>`
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 50%;
  padding-right: 8px;
  padding-top: 14px;
`;
