import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

export const Content = styled.div`
  width: 90%;
  align-self: center;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  padding: 5px 10px;
  margin-top: 10px;
`;
