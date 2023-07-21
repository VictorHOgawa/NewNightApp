import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: 2.5%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  border: 2px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 10px;
  padding: 15px 10px;
  color: ${({ theme }) => theme.color.gray_10};

  &:first-child {
    background-color: ${({ theme }) => theme.color.secondary_100};
  }
  &:nth-child(2) {
    background-color: transparent;
  }
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Promoter = styled(Image)`
  width: 30%;
  height: auto;
  border: 2px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 10px;
`;
