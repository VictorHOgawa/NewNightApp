import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  width: 80%;
  margin-left: 10%;
  padding: 10px;

  @media (min-width: 768px) {
    width: 40%;
    margin-left: 30%;
  }
`;

export const IndividualTotal = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_10};
  color: ${({ theme }) => theme.color.gray_10};
  padding: 5px;
  margin-top: 2px;
`;

export const FullTotal = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.primary_60};
  border-radius: 5px;
  margin-top: 20px;
  padding: 5px;
`;
