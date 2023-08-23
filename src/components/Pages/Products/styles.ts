import px2vw from "@/utils/size";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-self: center;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-radius: 10px;
  padding: 5px 2px;
`;

export const Details = styled.div`
  display: flex;
`;

export const ProductImage = styled(Image)`
  width: ${px2vw(100, 320)};
  height: ${px2vw(100, 320)};
  align-self: center;

  @media (min-width: 768px) {
    width: ${px2vw(150, 768)};
    height: ${px2vw(150, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(100, 1024)};
    height: ${px2vw(100, 1024)};
  }
`;

export const Dets = styled(Stack)`
  align-self: center;
  align-items: center;
`;

export const Icons = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;

export const Match = styled(Image)`
  width: 20%;
  height: auto;
  align-self: flex-end;
`;

export const Button = styled.button`
  display: flex;
  background-color: black;
  color: ${({ theme }) => theme.color.gray_10};
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 10px;
  padding: 5px 10px;
  align-self: center;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const XLogo = styled(Image)`
  width: 40%;
  height: auto;
  align-self: center;
  margin-left: 30%;
`;

export const Top = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
  }
`;
