import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutTitle = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  text-align: center;
`;
