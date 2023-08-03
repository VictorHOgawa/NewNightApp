import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin-left: 2.5%;

  @media (min-width: 768px) {
    width: 60%;
    margin-left: 20%;
  }
`;

export const Button = styled.button`
  width: 40%;
  background-color: ${({ theme }) => theme.color.primary_40};
  border: 0;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const ButtonImg = styled(Image)`
  width: 100%;
  height: 100%;
`;
