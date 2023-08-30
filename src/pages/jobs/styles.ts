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

export const NightPremium = styled(Image)`
  width: ${px2vw(310, 320)}px;
  height: ${px2vw(90, 320)}px;
  border-radius: 10px;
  align-self: center;
  margin-top: 5%;
`;
