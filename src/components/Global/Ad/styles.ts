import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 85%;
  margin-left: 7.5%;
  @media (min-width: 768px) {
    width: 70%;
    margin-left: 15%;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin-left: 25%;
  }
`;

export const AdImage = styled(Image)`
  width: 100%;
  height: auto;
`;
