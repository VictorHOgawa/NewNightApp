import Image from "next/image";
import { styled } from "styled-components";

interface SelectedProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin-left: 2.5%;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 25%;
    justify-content: space-evenly;
  }
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
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: ${({ selected }) => (selected ? 1 : 1.1)};
  }

  @media (min-width: 768px) {
    width: 40%;
  }
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
