import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pix = styled(Image)`
  width: 80%;
  height: auto;
  align-self: center;

  @media (min-width: 768px) {
    width: 15%;
  }
`;
