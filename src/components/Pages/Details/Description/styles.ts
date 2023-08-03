import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: 2.5%;
  color: ${({ theme }) => theme.color.gray_10};
  text-align: justify;

  @media (min-width: 768px) {
    width: 70%;
    align-self: center;
    margin-left: 0;
  }
`;
