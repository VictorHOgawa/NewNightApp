import { styled } from "styled-components";

interface TabProps {
  active: boolean;
}

export const Tab = styled.div<TabProps>`
  width: 28%;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ active, theme }) =>
    active ? theme.color.primary_80 : theme.color.gray_10};
`;
