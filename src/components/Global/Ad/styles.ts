import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  margin-left: 5%;

  @media (min-width: 768px) {
    margin-left: 10%;
  }

  @media (min-width: 1024px) {
    margin-left: 15%;
  }
`;

export const AdImage = styled(Image)`
  width: 95%;
  height: auto;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
    /* height: 20vh; */
    /* object-fit: cover; */
  }
`;
