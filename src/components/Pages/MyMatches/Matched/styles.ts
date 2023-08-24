import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

interface LockedProps {
  locked: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

export const Icon = styled(Image)`
  width: ${px2vw(30, 320)};
  height: ${px2vw(30, 320)};
  margin-top: -7%;

  @media (min-width: 768px) {
    width: ${px2vw(30, 768)};
    height: ${px2vw(30, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(30, 1024)};
    height: ${px2vw(30, 1024)};
  }
`;

export const SliderContainer = styled.div``;

export const PersonContainer = styled.div`
  display: flex;
  width: ${px2vw(50, 320)};
  height: ${px2vw(50, 320)};
  border-radius: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: ${px2vw(50, 768)};
    height: ${px2vw(50, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(50, 1024)};
    height: ${px2vw(50, 1024)};
  }
`;

export const Person = styled(Image)<LockedProps>`
  width: ${px2vw(50, 320)};
  height: ${px2vw(50, 320)};
  opacity: ${({ locked }) => (locked ? 0.5 : 1)};

  @media (min-width: 768px) {
    width: ${px2vw(50, 768)};
    height: ${px2vw(50, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(50, 1024)};
    height: ${px2vw(50, 1024)};
  }
`;

export const Locked = styled(Image)`
  position: absolute;
  width: ${px2vw(25, 320)};
  height: ${px2vw(25, 320)};

  @media (min-width: 768px) {
    width: ${px2vw(25, 768)};
    height: ${px2vw(25, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(25, 1024)};
    height: ${px2vw(25, 1024)};
  }
`;
