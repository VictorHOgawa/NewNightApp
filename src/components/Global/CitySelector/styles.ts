import { Dropdown } from "react-bootstrap";
import { styled } from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

export const Container = styled.div``;

export const Button = styled(Dropdown)``;

export const Toggle = styled(Dropdown.Toggle)``;

export const Menu = styled(Dropdown.Menu)`
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.secondary_100};

  opacity: 0.95;
  padding: 0 5px;
`;

export const ItemText = styled(Dropdown.ItemText)`
  color: ${({ theme }) => theme.color.primary_80};
`;

export const Item = styled(Dropdown.Item)`
  color: ${({ theme }) => theme.color.gray_10};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_10};
  padding: 10px;
  &:hover {
    color: ${({ theme }) => theme.color.primary_100};
  }
`;

export const Icon = styled(FaLocationDot)`
  color: ${({ theme }) => theme.color.primary_60};
  width: 25px;
  height: 25px;
`;
