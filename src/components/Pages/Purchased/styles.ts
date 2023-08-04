import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-left: 10%;

  @media (min-width: 768px) {
    width: 60%;
    margin-left: 20%;
  }
`;

export const Btn = styled.button`
  width: 40%;
  height: auto;
  border: 0;
  background-color: ${({ theme }) => theme.color.primary_40};
  border-radius: 10px;
  margin: 5%;

  @media (min-width: 768px) {
    width: 20%;
    margin: 2%;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: auto;
`;
