import px2vw from "@/utils/size";
import { Dropdown } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 90%;
  align-self: center;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Button = styled(Dropdown)``;

export const Toggle = styled(Dropdown.Toggle)``;

export const Menu = styled(Dropdown.Menu)`
  background-color: ${({ theme }) => theme.color.primary_60};
  border: 1px solid ${({ theme }) => theme.color.secondary_100};

  opacity: 0.95;
  padding: 0 5px;
`;

export const ItemText = styled(Dropdown.ItemText)`
  color: ${({ theme }) => theme.color.primary_80};
`;

export const Item = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_10};
  color: ${({ theme }) => theme.color.gray_10};
  padding: 10px;
  margin-top: 5px;
  height: ${px2vw(30, 320)};
  &:hover {
    color: ${({ theme }) => theme.color.primary_100};
  }
  &:last-child {
    border: 0;
  }

  @media (min-width: 768px) {
    height: ${px2vw(30, 768)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(30, 1024)};
  }
`;
