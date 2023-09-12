import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Main = styled.div``;

export const Test = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled(Image)`
  width: ${px2vw(200, 320)};
  height: ${px2vw(200, 320)};
  align-self: center;

  @media (min-width: 768px) {
    width: ${px2vw(200, 768)};
    height: ${px2vw(200, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(200, 1024)};
    height: ${px2vw(200, 1024)};
  }
`;
