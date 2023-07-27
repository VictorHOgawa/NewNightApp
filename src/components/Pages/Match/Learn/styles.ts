import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  position: absolute;
  bottom: 10px;
  background-color: #1e1e1e80;
  color: ${({ theme }) => theme.color.gray_10};
  border: 0;
  border-radius: 10px;
  align-self: center;
  padding: 5px 10px;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 50px;
  height: 50px;
`;
