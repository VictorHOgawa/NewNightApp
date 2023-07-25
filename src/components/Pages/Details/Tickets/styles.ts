import Image from "next/image";
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
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.color.secondary_80};
  width: 95%;
  align-self: center;
  border-radius: 5px;
`;

export const TicketTitle = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  text-align: start;
`;

export const CounterArea = styled.div`
  display: flex;
`;

export const Counter = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 10px;
  color: white;
  width: 50px;
  justify-content: center;
  margin: 0 5px;
  padding-top: 2px;
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemButton = styled.button`
  width: 75px;
  height: 75px;
  margin: 5px;
  border: 0;
  background-color: transparent;
`;

export const Item = styled(Image)``;

export const Check = styled.div``;

export const Input = styled.input``;

export const Clickable = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;
