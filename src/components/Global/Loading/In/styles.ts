import px2vw from "@/utils/size";
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
  width: ${px2vw(180, 320)};
  height: ${px2vw(180, 320)};

  @media (min-width: 768px) {
    width: ${px2vw(200, 768)};
    height: ${px2vw(200, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(200, 1024)};
    height: ${px2vw(200, 1024)};
  }
`;
