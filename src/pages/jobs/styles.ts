import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  height: auto;
  padding: 0 2%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 60%;
    align-self: center;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;
export const NightPremium = styled(Image)`
  width: ${px2vw(310, 320)};
  height: ${px2vw(90, 320)};
  border-radius: 10px;
  align-self: center;
  margin-top: 5%;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }

  @media (min-width: 768px) {
    width: ${px2vw(310, 768)};
    height: ${px2vw(90, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(310, 1024)};
    height: ${px2vw(90, 1024)};
  }
`;
