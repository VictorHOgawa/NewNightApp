import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.color.background};
  padding-bottom: 100px;
`;
