import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;
