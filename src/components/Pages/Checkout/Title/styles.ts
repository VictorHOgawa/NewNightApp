import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-left: 2.5%;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 25%;
  }
`;

export const CheckoutTitle = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  text-align: center;
`;
