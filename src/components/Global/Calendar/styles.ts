import px2vw from "@/utils/size";
import { styled } from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.primary_60};
  text-align: center;
  background-color: ${({ theme }) => theme.color.gray_10};
  line-height: 1;
  border-radius: 5px;
  padding-top: 5px;

  @media (min-width: 768px) {
    width: 55px;
    height: 55px;
  }

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.primary_60};
  height: 20px;
  width: 100%;
  color: ${({ theme }) => theme.color.gray_10};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Date = styled.label`
  font-size: ${px2vw(13, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(13, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(13, 1024)};
  }

  @media (min-width: 1400px) {
    font-size: ${px2vw(13, 1400)};
  }
`;
