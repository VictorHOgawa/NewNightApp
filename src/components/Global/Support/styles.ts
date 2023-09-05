import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

export const Img = styled(Image)`
  width: 70vw;
  height: auto;
  align-self: center;

  @media (min-width: 768px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    width: 20vw;
  }
`;
