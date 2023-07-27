import px2vw from "@/utils/size";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-self: center;
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
  width: 50px;
  height: 50px;
`;

export const Dets = styled(Stack)``;

export const Icons = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Text = styled.div`
  font-size: ${px2vw(12, 320)};
  color: ${({ theme }) => theme.color.gray_10};
`;

export const Area = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(12, 320)};
  padding: 0px 2px;
  height: max-content;
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
