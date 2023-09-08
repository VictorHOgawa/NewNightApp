import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 25%;
  }
`;
