import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
    align-self: center;
  }
`;

export const IFrame = styled.iframe`
  @media (min-width: 768px) {
    height: 40vh;
  }
`;
