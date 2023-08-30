import Image from "next/image";
import { styled } from "styled-components";

export const Main = styled.div``;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  z-index: 2;
`;

export const Logo = styled(Image)`
  width: 10%;
  height: auto;
  align-self: center;
`;
