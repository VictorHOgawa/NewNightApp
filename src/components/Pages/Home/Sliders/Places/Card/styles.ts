import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

interface CurrentProps {
  current: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  text-align: center;

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 85%;
  }
`;

export const SliderImg = styled(Image)`
  width: 100%;
  height: auto;
`;

export const PlaceCurrent = styled.label<CurrentProps>`
  color: ${({ current, theme }) =>
    current ? theme.color.confirmation : theme.color.red_70};
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;

export const PlaceTitle = styled.label`
  color: ${({ theme }) => theme.color.primary_80};
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(15, 1024)};
  }
`;

export const PlacePlace = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(15, 1024)};
  }
`;
