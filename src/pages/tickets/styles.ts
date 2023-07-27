import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  height: auto;
  padding-bottom: 75px;
`;
