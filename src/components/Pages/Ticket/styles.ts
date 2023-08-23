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

export const TicketImage = styled(Image)`
  width: ${px2vw(50, 320)};
  height: ${px2vw(50, 320)};
  align-self: center;

  @media (min-width: 768px) {
    width: ${px2vw(100, 768)};
    height: ${px2vw(100, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(75, 1024)};
    height: ${px2vw(75, 1024)};
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
  font-size: ${px2vw(10, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(10, 1024)};
  }
`;

export const Area = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.gray_10};
  padding: 2px 5px;
  height: max-content;
  font-size: ${px2vw(12, 320)};
  align-items: center;
  justify-content: center;
  text-align: center;

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
