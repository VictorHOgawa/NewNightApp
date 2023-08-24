import px2vw from "@/utils/size";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: ${px2vw(10, 320)};
  background-color: ${({ theme }) => theme.color.primary_80};

  @media (min-width: 768px) {
    width: 60%;
    align-self: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
