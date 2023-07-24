import { test } from "node:test";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  text-align: center;
  font-weight: bold;
`;

export const TicketType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  margin-top: 5px;
  &::after {
    position: absolute;
    content: "";
    width: 90%;
    margin-left: 4%;
    border-bottom: 1px solid white;
    margin-top: 40px;
  }
`;

export const TicketTitle = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;

export const CounterArea = styled.div`
  display: flex;
`;

export const Counter = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 20px;
  color: white;
  width: 50px;
  justify-content: center;
  margin: 0 5px;
  padding-top: 2px;
`;
