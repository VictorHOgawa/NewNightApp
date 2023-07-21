import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Img = styled(Image)`
  width: 60%;
  height: auto;
  align-self: center;
`;
