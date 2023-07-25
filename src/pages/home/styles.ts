import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-bottom: 20px;
  }
`;
