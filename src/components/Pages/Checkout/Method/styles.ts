import Image from "next/image";
import { styled } from "styled-components";

interface SelectedProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: 2.5%;
`;

export const Button = styled.button<SelectedProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45%;
  border: 2px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 10px;
  padding: 15px 10px;
  color: ${({ theme }) => theme.color.gray_10};
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.secondary_100 : "transparent"};
`;

export const Icon = styled(Image)`
  width: 45px;
  height: 45px;
`;

export const Promoter = styled(Image)`
  width: 30%;
  height: auto;
  border: 2px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 10px;
`;
