import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin-left: 2.5%;
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 60%;
    margin-left: 20%;
  }
`;

export const AdImage = styled(Image)`
  width: 100%;
  height: auto;
`;
