import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.background},
    ${({ theme }) => theme.color.secondary_60}
  );
  min-height: 100vh;
  height: auto;
`;
