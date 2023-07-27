import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 80vh;
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 10px;
  background: linear-gradient(145deg, #9c38ce90, #420a8990, #9c38ce90);
  align-self: center;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;
