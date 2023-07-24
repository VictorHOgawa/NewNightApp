import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;
