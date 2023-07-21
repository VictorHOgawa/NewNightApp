import Image from "next/image";
import { styled } from "styled-components";

interface CurrentProps {
  current: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  text-align: center;
`;

export const SliderImg = styled(Image)`
  width: 100%;
  height: auto;
`;

export const PlaceCurrent = styled.label<CurrentProps>`
  color: ${({ current, theme }) =>
    current ? theme.color.confirmation : theme.color.red_70};
`;

export const PlaceTitle = styled.label`
  color: ${({ theme }) => theme.color.primary_80};
`;

export const PlacePlace = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;
