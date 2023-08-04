import px2vw from "@/utils/size";
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
  width: 70%;
  justify-content: center;
  align-items: center;
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
    width: 30%;
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 35px;
`;
