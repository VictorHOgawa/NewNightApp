import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin-left: 2.5%;

  @media (min-width: 768px) {
    width: 60%;
    margin-left: 20%;
  }
`;

export const NightPremium = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;
